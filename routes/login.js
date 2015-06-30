module.exports = function(app){ 
	app.get('/login',function(req,res){ 
		res.render('login');
	});
	app.post('/login',function(req,res){ 
	var User = global.dbHandel.getModel('user');
	var uname = req.body.uname;
	User.findOne({name:uname},function(error,doc){ 
		if(error){ 
			res.send(500);
			console.log(error);
		}else if(!doc){ 
			req.session.error = 'User not exist';
			req.send(404);
		}else{ 
			if(req.body.upwd != doc.password){ 
				req.session.error = "Password error";
				res.send(404);
			}else{ 
				req.session.user = doc;
				res.send(200);
			}
		}
	});
});

};