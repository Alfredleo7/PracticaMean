var User = require('mongoose').model('User');

exports.signUp = function(req, res){
  var user = User(req.body);
  user.save(function(err, user){
    if(err){
      res.status(500).send({ message: 'Error al crear el usuario ' + err });
    } else {
      res.status(200).json(user);
    }
  })
}
