const mongosse = require('mongoose')

// Declarando um modelo para inscrita no banco de dados
const task = mongosse.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = task