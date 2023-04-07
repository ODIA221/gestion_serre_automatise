const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
// Express APIs
const api = require('./controllers/user.ctrl')


/* connexion bd */
const url = mongoose  /* mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1 */
  .connect("mongodb+srv://odia221:odia221@cluster0.4sxdb68.mongodb.net/serre_automatisee?retryWrites=true&w=majority ")/* mongodb+srv://odia221:odia221@cluster0.4sxdb68.mongodb.net/serre_automatisee?retryWrites=true&w=majority */
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
const port = process.env.PORT || 2000

const servers = require('http').createServer(app)
 servers.listen(port, () => {
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


////////////////////// 2 Socket //////////////


io = require('socket.io')(servers,
  {
      cors:
      {
          origin: "*",
          methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
          credentials: false
      }
  });

  const SerialPort = require('serialport');
  const port2 = new SerialPort('/dev/ttyACM0', { baudRate: 9600} )
  const { ReadlineParser } = require('@serialport/parser-readline');
  const parser = port2.pipe(new ReadlineParser({ delimiter: '\r\n' }))


  let CodeRFID
  parser.on("data", (data) => {
    // console.log(data);
    let tempon = data.split('/')
     CodeRFID = tempon[0]

     if(CodeRFID === '21116612546'){
      let jwtToken = jwt.sign(
        {
          
          CodeRFID: '21116612546',
        },
        'token-pour-se-connecter',
        {
          expiresIn: '1h',
        },
      )
      io.emit('rfid',jwtToken);
      console.log(jwtToken);
     }
     console.log(CodeRFID);

    
     
  });
   
 /*  let actions
  parser.on("data", (data) => {
    io.on("etatArrosage");
    console.log(actions);
    io.on("etatToit");
    console.log(actions);
    
 });
    */
  

 






