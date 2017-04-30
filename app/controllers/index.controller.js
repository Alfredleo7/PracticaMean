exports.inicio = function(req, res){

  if(req.session.lastVisit){
    console.log(req.session.lastVisit);
  }

  req.session.lastVisit = new Date();

  res.status(200).render('index');
}
