const mongoose = require('mongoose')

const api = require('./routes/auth.routes')

mongoose
.connect('mongodb+srv://fadalba:Thiaroye44@cluster0.daoknxe.mongodb.net/test')
  
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })