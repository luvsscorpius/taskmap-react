const jwt = require('jsonwebtoken')

const secretKey = 'minhasenha'

const verifyToken = (req, res, next) => {
    const token = req.header["Authorization"]

    console.log(token)

    if (!token) {
        return res.status(403).send('Token is required')
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token')
        }

        req.user = decoded
        next()
    })
}

module.exports = verifyToken