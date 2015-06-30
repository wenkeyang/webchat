module.exports = function(app){ 
	app.get('/home',function(req,res){
		if(req.session.user){ 

		}else{ 
			req.session.error  = 'Pls login';
			res.render('/login');
		}
	});
};