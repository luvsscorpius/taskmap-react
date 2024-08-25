// authMiddleware.js
const jwt = require('jsonwebtoken')

const secretKey = 'minhasenha'

const verifyToken = (req, res, next) => {
    // Acessando o cabecalho da requisição
    const authHeader = req.headers["authorization"]

    // Caso o token estiver faltando na requisição
    if (!authHeader) {
        return res.status(403).send('Token is required')
    }

    // Agora iremos verificar se o token começa com `Bearer ` 
    // Pois era isso que estava fazendo ele retornar o erro 401
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null

    if (!token) {
        return res.status(403).send('Token is required')
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token')
        } else {
            req.user = decoded
            next()
        }
    })
}

module.exports = verifyToken