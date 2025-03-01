import { userModel } from '../Models/User.model.js'
import { BlacklistedToken } from '../Models/BlacklistToken.model.js'

const registerUser = async (req, res) => {
    try {
        const { email } = req.body
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists!' })
        }

        const newUser = new userModel(req.body)
        await newUser.save()

        const token = newUser.toGenerateAuthToken()

        // ✅ Token ko cookie me store karna
        res.cookie("token", token, {
            httpOnly: true,   // XSS attack se bachata hai
            secure: process.env.NODE_ENV === "production", // HTTPS ke liye
            sameSite: "Strict",
            maxAge: 24 * 60 * 60 * 1000, // 1 din ke liye valid
        })

        res.status(201).json({
            message: 'User registered successfully!',
            newUser,
        })
    } catch (error) {
        console.error('Error during user registration:', error.message)
        if (error.name === 'ValidationError') {
            return res
                .status(400)
                .json({ message: 'Validation failed!', details: error.errors })
        }
        res.status(500).json({
            message: 'Something went wrong!',
            error: error.message,
        })
    }
}


// login user

const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await userModel.findOne({ email }).select('+password')

        if (!user) {
            return res.status(404).json({ message: 'Invalid credentials!' })
        }

        const isMatch = await user.isPasswordMatch(password)

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials!' })
        }

        const token = user.toGenerateAuthToken()

        res.cookie('token', token, {
            httpOnly: true, // Prevents access to cookie via JavaScript
            secure: process.env.NODE_ENV === 'production', // Ensures it's sent over HTTPS in production
            maxAge: 24 * 60 * 60 * 1000, // Cookie expiration time (1 day)
        })

        return res.status(200).json({
            message: 'User logged in successfully!',
            token,
            user: {
                id: user._id,
                email: user.email,
                fullName: user.fullName,
            },
        })
    } catch (error) {
        console.error('Error during user login:', error.message)
        return res
            .status(500)
            .json({ message: 'Something went wrong!', error: error.message })
    }
}

const authProfile = async (req, res) => {
    res.status(200).json({
        message: 'User profile fetched successfully!',
        user: req.user,
    })
}

// const logoutUser = async (req, res) => {
//     res.clearCookie('token')

//     const token = req.cookies.token || req.headers.authorization.split(' ')[1]

//     const blacklistedToken = new BlacklistedToken({ token })
//     await blacklistedToken.save()
//     res.status(200).json({ message: 'User logged out successfully!' })
// }

const logoutUser = async (req, res) => {
    try {
        const token = req.cookies.token || (req.headers.authorization ? req.headers.authorization.split(' ')[1] : null);

        if (!token) {
            return res.status(400).json({ message: "No token provided!" });
        }

        await new BlacklistedToken({ token }).save();

        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Secure cookie for production
            sameSite: "Strict"
        });

        res.status(200).json({ message: "User logged out successfully!" });

    } catch (error) {
        console.error("Logout Error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export { registerUser, loginUser, authProfile, logoutUser }
