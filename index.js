const _ = require('lodash');
// exports.printMsg = function(){
// 	console.log('Testing lodash');
// };

module.exports = function(width,height){
	var result = _.multiply(width,height);
	return result;
};