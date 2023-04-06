const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Express APIs
const api = require('./controllers/user.ctrl')


/* connexion bd */
const url = mongoose  /* mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1 */
  .connect("mongodb+srv://odia221:odia221@cluster0.4sxdb68.mongodb.net/serre_automatisee?retryWrites=true&w=majority  ")/* mongodb+srv://odia221:odia221@cluster0.4sxdb68.mongodb.net/serre_automatisee?retryWrites=true&w=majority */
  .then((x) => {
    console.log(`Vous êtes connecté à la base de donnée : "${x.connections[0].name}"`)
  })
  .catch((err, client) => {
    console.error('Erreur de connexion à mongo', err.reason)
  })


// Express settings
const app = express()
/* cors */
app.use(cors());


/* encoding urls */
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//formatage datas 
/* app.use(bodyParser.json()) */
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)



// Serve static resources
app.use('/api', api)

// Error favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204))

// Define PORT
const port = process.env.PORT || 5000

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

})





