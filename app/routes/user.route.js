var user = require('../controllers/user.controller');

module.exports = function(app){
  app.route('/user')
    .post(user.signUp);

  return app;
}
