module.exports = function(app){ 
	app.get('/register',function(req,res){ 
		res.render('register');
	});
	app.post('/register',function(req,res){ 
	var User = global.dbHandel.getModel('user');
	var uname = req.body.uname;
	User.findOne({name:uname},function(error,doc){ 
		if(error){ 
			res.send(500);
			req.session.error = "Internet error~";
			console.log(error);
		}else if(doc){ 
			req.session.error = 'User already exist~';
			req.send(500);
		}else{ 
			User.create({ 
				name:uname,
				password:req.body.upwd
			},function(error,doc){ 
				if(error){ 
					res.send(500);
					console.log(500);
				}else{ 
					req.session.error = "User create success";
					res.send(200);
				}
			});
		}
	});

});

};