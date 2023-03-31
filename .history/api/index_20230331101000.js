const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Express APIs
const api = require('./controllers/user.ctrl')





// Express settings
const app = express()
/* encoding urls */
app.use(express.urlencoded({extended: true}));
app.use(express.json());
/* header */
/* app.use(function(res,req , next){
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
}); */


const url = mongoose  
  .connect("mongodb+srv://mariecherif:Marie12@cluster0.qn40ttt.mongodb.net/?retryWrites=true&w=majority/")/* mongodb+srv://odia221:odia221@cluster0.4sxdb68.mongodb.net/serre_automatisee?retryWrites=true&w=majority */
  .then((x) => {
    console.log(`Vous êtes connecté à la base de donnée : "${x.connections[0].name}"`)
  })
  .catch((err, client) => {
    console.error('Erreur de connexion à mongo', err.reason)
  })





//formatage datas 
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())

// Serve static resources
app.use('/api', api)

// Error favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204))

// Define PORT
const port = process.env.PORT || 2000

const servers = app.listen(port, () => {
  console.log('Écoute sur le port : ' + port)
})

// Express error handling
app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error('Une Erreur serser est constatée'))
  })
})

app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
  /* res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next(); */
})





