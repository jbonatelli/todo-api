const mongoose = require('mongoose')                                                                                    

mongoose.connect('mongodb+srv://todouser:PosPuc%402019%21@cluster0-70qnz.mongodb.net/todolist?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    userCrateIndex: true,
    useFindAndModify: false
});

console.log('Conectado')