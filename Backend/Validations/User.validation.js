import { check, validationResult } from 'express-validator'

const validateUser = [
    check('fullName')
        .isString()
        .withMessage('Full Name must be a string.')
        .notEmpty()
        .withMessage('Full Name is required.')
        .trim()
        .isLength({ min: 3 })
        .withMessage('Full Name must be at least 3 characters long.'),


    check('email')
        .isEmail()
        .withMessage('Invalid email address.')
        .notEmpty()
        .withMessage('Email is required.')
        .trim(),

    check('password')
        .notEmpty()
        .withMessage('Password is required.')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long.'),


]

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    next()
}

const loginUser = [
    check('email')
        .isEmail()
        .withMessage('Invalid email address.')
        .notEmpty()
        .withMessage('Email is required.')
        .trim(),

    check('password')
        .notEmpty()
        .withMessage('Password is required.')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long.'),
]

export { validateUser, handleValidationErrors, loginUser }
