const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username:{type: String, required: true, unique:true},
    email:{type: String, required: true, unique:true},
    password:{type: String, required:true}
});

const UserModel = mongoose.model('User' , loginSchema);

module.exports = UserModel;