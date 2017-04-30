var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('../service/crypto.js');

var userSchema = new Schema({
  user: String,
  password: String
});

userSchema.pre('save', function(next){
  this.password = crypto.encriptar(this.password);
  next();
});

mongoose.model('User', userSchema);
