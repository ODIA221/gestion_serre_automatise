const mongoose = require('mongoose')

mongoose
.connect('mongodb://localhost:27017/serreAutomase')
  
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })