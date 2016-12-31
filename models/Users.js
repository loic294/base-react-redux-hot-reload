var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var usersSchema = new Schema({
  nom : { type: String },
  email : { type: String, required: true, unique : true },
  password : { type: String, required: true }
});

usersSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
usersSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var UserModel = mongoose.model('users', usersSchema);

module.exports = {
    schema : usersSchema,
    model : UserModel
};
