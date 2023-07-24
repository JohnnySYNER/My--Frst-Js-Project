const { model } = require('mongoose');

const profileSchema = new mongoose.schema({
    userId: {type : mongoose.Schema.Types.ObjectId , ref : 'Login' , required : true},
    fullName: {type : String , required : true},
    age: {type : Number, required : true},
    bio: {type : String},
    profileImage:{type : String}
});

const ProfileModel = mongoose.model('Profile', profileSchema);

module.exports = ProfileModel;