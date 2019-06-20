const mongoose = require('mongoose')                                                                           

// Eliminando avido de pacotes depreciados

// Conexão com mongodb atlas
mongoose.connect('mongodb+srv://todouser:PosPuc%402019%21@cluster0-70qnz.mongodb.net/todolist?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,

});

console.log('MongoDB Atlas runnning')