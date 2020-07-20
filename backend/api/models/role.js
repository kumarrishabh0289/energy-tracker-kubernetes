const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, unique: true },
    role: String,
   
});

module.exports = mongoose.model('Role', roleSchema);