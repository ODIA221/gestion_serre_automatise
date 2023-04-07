const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let climatSchema = new Schema({
   /*  _id: { type: String, required:false }, */
   email: { type: String, unique: true, required:true },
   password: { type: String, required:true },
}, {timestamps: true},
{
    collection: 'historique'
})


module.exports = mongoose.model('historique', climatSchema)
