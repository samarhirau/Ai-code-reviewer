import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const UserSchema = new Schema({
    fullName: {
            type: String,
            required: true,
            trim: true,
            minlength: [3, 'Name must be at least 3 characters long.'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long.'],
    },

})

// Hash password before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// Method to compare passwords
UserSchema.methods.isPasswordMatch = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Method to generate JWT token
UserSchema.methods.toGenerateAuthToken = function () {
    return jwt.sign(
        { id: this._id, email: this.email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
    )
}

export const userModel = mongoose.model('User', UserSchema)
