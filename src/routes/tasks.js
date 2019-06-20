const express = require('express')

const router = new express.Router()

//Definindo rotas de tasks dos usuários
router.post('/tasks', (req, res) => {
    res.status(201).send()
})

router.get('/tasks', (req, res) => {
    res.status(200).send(users)
})

router.get('/tasks/:id', (req, res) => {
    console.log(req.params.id)
    const user = {name: 'user1'}
})

router.patch('/tasks/:id', (req, res) => {
    res.send()
})

router.delete('/tasks/:id', (req, res) => {
    res.send()
})

module.exports = router