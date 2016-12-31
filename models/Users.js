var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var usersSchema = new Schema({
  nom : { type: String },
  email : { type: String, required: true, unique : true },
  password : { type: String, required: true }
});

var UserModel = mongoose.model('users', usersSchema);

module.exports = {
    schema : usersSchema,
    model : UserModel
};
