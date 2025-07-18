const jwt = require('jsonwebtoken')

const authentication = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized user' })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Forebidden: Invalid or expired token' })
        }
        req.user = decoded;
        next();
    })

}

module.exports = authentication