const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()
const userSchema = require('../models/User')
const authorize = require('../authentification/auth')
mongoose = require('mongoose')

// Inscription
router.post('/ajouter', (req, res, next) => {
    console.log(req.body)

      bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new userSchema({
          email: req.body.email,
          password: hash,
        })
        user.save()
          .then((response) => {
            console.log(response);
            res.status(201).json({
              message: 'Inscription réussie !',
              result: response,
            })
          })
          .catch((error) => {
            res.status(409).json({
              error: error.message.split("email:")[1],
            })
          })
      })
  },
)
//modif mdp
router.patch('/modifierMdp/:id', async(req, res) => {
  try {
        let { actuelMdp, nouveauMdp } = req.body;
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        let user= userSchema.findById({"_id": req.params.id});
        if(!user){
          return res.status(404);
        };
        if (updatedData.actuelMdp){
          user.then(async(e)=> {

                if(await bcrypt.compare(actuelMdp, e.password)){
                    const hash = await bcrypt.hash(nouveauMdp, 10);
                      updatedData.password = hash;
                      const result = await userSchema.findByIdAndUpdate(
                      id, updatedData, options
                      );
                    return res.send(result);
                }
                return res.send('Corres non trouvé');
          });

      }else{
        const result = await userSchema.findByIdAndUpdate(
              id, updatedData, options
          )
          return res.send(result)
      }
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})


// Modification mot de passe
router.patch('/updatepassword/:id' , async(req, res) => {
  try {
  const id = req.params.id;
  const updatedData = req.body;
  const options = { new: true };
  const ancienpassword= updatedData.ancienpassword
  const user =await userSchema.findById(id)
  const comp = await bcrypt.compare(ancienpassword, user.password)
 console.log(bcrypt.compare(ancienpassword, user.password));
  if(!comp){
    res.status(400).json({message: "veuillez saisir votre actuel mot de passe!"})
    return;
  }
  
      updatedData.password
      const hash = await bcrypt.hash(updatedData.password, 10);
      updatedData.password = hash;
      
              const result = await userSchema.findByIdAndUpdate(
              id, updatedData, options);
            return  res.send(result);        
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
  })


// Connexion
router.post('/connexion', (req, res, next) => {
  let getUser
  userSchema
    .findOne({
      email: req.body.email,
    })
    // Verifier si l'utilisateur existe
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: 'Compte non existant !',
          /* alert(message); */
        })
      }
      getUser = user
      return bcrypt.compare(req.body.password, user.password)
    })
    .then((response) => {
      if (!response) {
        return res.status(401).json({
          message: 'Le mot de passe est incorrect !',
        })
      }else if(getUser.etat == false){
        return res.status(401).json({
          message: 'Le compte est désactivé !' ,
        })
      }
      let jwtToken = jwt.sign(
        {
          email: getUser.email,
          userId: getUser._id,
        },
        'token-pour-se-connecter',
        {
          expiresIn: '1h',
        },
      )
      res.status(200).json({
        token: jwtToken,
        expiresIn: 3600,
        _id: getUser._id,
      })
    })
    .catch((err) => {
      return res.status(401).json({
        message: 'Authentication échouée',
      })
    })
})

// Recuperez tous les utilisateurs
router.route('/').get((req, res, next) => {
  userSchema.find((error, response)=> {
    if (error) {
      return next(error)
    } else {
      return res.status(200).json(response)
    }
  })
})

// Recuperez un utilisateur
router.route('/lire/:id').get((req, res) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Recuperez et autoriser la connexion d'un utilisateur
router.route('/profile/:id').get(authorize, (req, res, next) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

// Update User
router.route('/modifier/:id').put((req, res, next) => {
  userSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log('Modification réussie !')
      }
    },
  )
})


module.exports = router