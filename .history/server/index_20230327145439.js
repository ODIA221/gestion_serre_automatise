const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://mariecherif:M@cluster0.qn40ttt.mongodb.net/?retryWrites=true&w=majority/serreAutomatise')
  
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })