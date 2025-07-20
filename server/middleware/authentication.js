const jwt = require('jsonwebtoken')

const authentication = (req, res, next) => {

    const token = req.headers['authorization'];
    // const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized user' })
    }

    // console.log("JWT Secret:", process.env.JWT_SECRET);

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: err.message })
        }
        req.user = decoded;
        next();
    })

}

module.exports = authentication