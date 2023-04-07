const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let climatSchema = new Schema({
   /*  _id: { type: String, required:false }, */
   temperature: { type: String},
   humsol: { type: String},
}, {timestamps: true},
{
    collection: 'historique'
})


module.exports = mongoose.model('historique', climatSchema)
