const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let userSchema = new Schema({
   /*  _id: { type: String, required:false }, */
   email: { type: String, unique: true, required:true },
   password: { type: String, required:true },
}, {timestamps: true},
{
    collection: 'user'
})

userSchema.plugin(uniqueValidator, { message: 'Compte déjà existant !' });

module.exports = mongoose.model('user', userSchema)
