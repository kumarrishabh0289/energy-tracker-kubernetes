const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, unique: true },
    fname: String,
    lname: String,
    
    
   });

module.exports = mongoose.model('Profile', profileSchema);