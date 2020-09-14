const mongoose = require('mongoose');
URI = ('mongodb://localhost/prueba');
mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify : false
}).then(db => console.log('db conectada'))
.catch(error => console.log('Error de coneccion'));

