const express = require('express')
const Task = require('../models/tasks')

const router = new express.Router()

//Definindo rotas de tasks dos usuários
router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/tasks', async (req, res) => {
    const tasks = new task(req.body)

    try {
        tasks.save()
        res.status(201).send(tasks)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const tasks = await Task.findById(_id)

        if(!tasks) {
            return res.status(400).send()
        }
        res.send(tasks)

    } catch (error) {
        res.status(500).send()
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const update = Object.keys(req.body)
    const allowUpdate = ["description", "completed"]
    const isValidOperation = update.every((update) => allowUpdate.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({error: 'Estes campos não permitem alterações'})
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
        if(!task) {
            return res.status(400).send()
        }

        res.send(task)

    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task) {
            return res.send(404).send()
        }

        res.send(task)

    } catch (error) {
        res.status(500).send()
    }
})


module.exports = router