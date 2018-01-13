'use strict';

var AWS = require('aws-sdk');
    
const kinesis = new AWS.Kinesis({
	endpoint: `${process.env.KINESIS_HOST}:${process.env.KINESIS_PORT}`,
	region: process.env.KINESIS_REGION,
	apiVersion: '2013-12-02',
	sslEnabled: false
});

module.exports.handler = (event, context, callback) => { 
	console.log("You POSTed an event!");

	var putReq = kinesis.putRecord({
		Data: JSON.stringify(event.body),
		PartitionKey: '0',
		StreamName: process.env.KINESIS_STREAM_NAME_EVENTS
	}, function (err, data) { 
		if (err) {
			callback(err, { statusCode: 500, body: "Error writing to kinesis" } );
		}
		else { 
			callback(null, { statusCode: 200, body: "Ok" } );
		}
	});
};