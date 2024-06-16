module.exports = (req, res, next) => {
    const token = req.headers['authorization']
    console.log(token)

    if (token === 'valid-token') {
        next()
    } else {
        res.status(401).send('Unathorized')
    }
}