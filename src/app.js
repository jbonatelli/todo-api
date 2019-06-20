const express = require('express')
const mongoose = require('./db/mongoose')
const userRouter = require('./routes/users')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})