const express = require('express')
const router = express.Router()
const Mongo = require('../db')

router.put('/:user', async (req, res) => {
    try {
        const {userr} = req.params
        const users = await Mongo()

        const finder = users.find(user => user.id === userr)
        console.log(finder)

        console.log(users)

        await users.updateOne(finder._id, {$set: {name: 'Anderson'}})

        // await collection.updateOne(
        //     {_id: userr}, 
        //     {$push: {id: 0, taskName: 'Estudar JavaScript', isChecked: false}}
        // )

        res.send(userr)
        
    } catch(error) {
        console.error(error)
    }
})

module.exports = router