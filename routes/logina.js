module.exports = function(app){
    app.get('/logina',function(req,res){
        res.render('logina');
    });
    app.post('/logina',function(req,res){
        var User = global.dbHandel.getModel('user');
        var uname = req.body.uname;
        User.findOne({name:uname},function(error,doc){
            User.create({
                name:uname,
                password:req.body.upwd
            },function(error,doc){
                if(error){
                    res.send(500);
                    console.log(500);
                }else{
                    req.session.error = "User create YANG success";
                    res.send(200);
                }
            });
        });

    });

};