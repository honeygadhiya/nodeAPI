var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/user-data');
const winston = require('winston');

var userSchema = mongoose.Schema({
	userId: Number,
	userName: String,
	email: String,
	dt: String,
	designation: String,
	contactNo: Number,
	address: String,
	password: String
});
var User = mongoose.model('user', userSchema);

module.exports.getusers = function() {
	let users = [{"_id":"5b42f66290b4df260ec9610e","userId":78,"userName":"ccc","email":"a@gmail.com","dt":"2018-01-01","designation":"BA","contactNo":12,"address":"asr","password":"12","__v":0},{"_id":"5b45ce807f43cd291ed113b5","userId":87979,"userName":"fghgh","email":"hbgfh@gmail.com","dt":"2018-01-01","designation":"BA","contactNo":6767,"address":"gyh","password":"ftg","__v":0},{"_id":"5b45ce917f43cd291ed113b6","userId":898,"userName":"hgmj","email":"d@gmail.com","dt":"2018-01-01","designation":"Developer","contactNo":787,"address":"ghj","password":"h","__v":0},{"_id":"5b45dbc47f43cd291ed113b7","userId":6768787,"userName":"fgbcgfbgb","email":"d@gmail.com","dt":"2018-01-01","designation":"QA","contactNo":787,"address":"gh","password":"gyh","__v":0},{"_id":"5b45dbfe7f43cd291ed113b8","userId":8907897,"userName":"ghj","email":"fvg@gmail.com","dt":"2018-01-01","designation":"QA","contactNo":676,"address":"gh","password":"gh","__v":0}];
	return Promise.resolve(users);
	// return User.find();
};

module.exports.get = function(uId) {
	return User.findOne({ userId: uId });
};

module.exports.post = function(body) {
	console.log(body);
	var userInfo = body; //Get the parsed information
	var newUser = new User(body);
	console.log('newUser');
	console.log(newUser);
	return newUser.save();
};

module.exports.put = function(uid, body) {
	return User.findOneAndUpdate({ userId: uid }, body);
};

module.exports.delete = function(uid) {
	return User.findOneAndRemove({ userId: uid });
};
