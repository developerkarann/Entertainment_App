const User = require('../schema/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.createUser = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({
            success: false,
            message: 'Please enter credentials'
        })
    }
    try {
        const hashedPass = await bcrypt.hash(password, 10)
        const user = await User.create({
            email,
            password: hashedPass
        })

        res.status(200).json({
            sucess: true,
            messae: 'Account Created!',
            user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
        res.status(404).json({
            success: false,
            message: "User doesn't exists"
        })
    }

    let isValidPass = await bcrypt.compare(password, user.password)

    if (!isValidPass) {
        res.status(400).json({
            sucess: false,
            message: "Invalid password"
        })
    }

    const payload = { userId: user.id, username: user.email }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })

    const options = {
        maxAge: 60 * 60 * 1000,
        // path: '/',
        // sameSite: 'none',
        // secure: true
    }

    res.status(200).cookie('token', token, options).json({
        sucess: true,
        message: "Login sucessfull!",
        token,
        user
    })

}