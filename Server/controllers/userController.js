 var usermodel = require('../models/user');
const winston = require('winston');

module.exports.getusers=function (req, res) {
    usermodel.getusers()
    .then(data=>{
        res.json(data);
        winston.info('Fetched All Users');
    })
    .catch(function(err){
        winston.error(err);
    });
}

module.exports.get=function(req,res){
    let userid=req.params.userId ;
    usermodel.get(userid)
    .then(data=>{
        winston.info('Fetched user with id : '+userid);
        res.json(data);
    })
    .catch(function(err){
        winston.error(err);
    });
}

module.exports.post=function(req,res){
    let userInfo = req.body;
    console.log("Controller");
    console.log(userInfo);
     usermodel.post(userInfo) 
     .then(data=>{
         winston.info('User added successfully');
        res.json(data);
    })
    .catch(function(err){
        winston.error(err);
    });   
}

module.exports.put=function(req,res){
    let userid=req.params.userId ;
    usermodel.put(userid,req.body)
    .then(data=>{
        winston.info('User updated with id : '+userid);
        res.json(data);
    })
    .catch(function(err){
        winston.error(err);
    });
}

module.exports.delete=function(req,res){
    let userid=req.params.userId ;
    usermodel.delete(userid)
    .then(data=>{
        winston.info('User deleted with id : '+userid);
        res.json(data);
    })
    .catch(function(err){
        winston.error(err);
    });
}