const express = require('express')

//Declarando as rotas da aplicação
const mongoose = require('./db/mongoose')
const userRouter = require('./routes/users')
const taskRouter = require('./routes/tasks')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})