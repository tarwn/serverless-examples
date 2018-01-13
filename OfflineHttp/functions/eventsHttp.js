'use strict';

module.exports.handler = (event, context, callback) => { 
	console.log("You POSTed an event!");
	console.log(event.body);
    callback(null, { statusCode: 200, body: "Success" });
};