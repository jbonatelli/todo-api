const mongosse = require('mongoose')
const validator = require('validator')

const User = mongosse.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validade(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email inválido')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Senha contém caracteres inválidos')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Idade deve ser maior de 18 anos')
            }
        }
    }
})

module.exports = User