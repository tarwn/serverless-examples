'use strict';

module.exports.handler = (event, context, callback) => {
    event.Records.forEach((record) => {
        const payload = new Buffer(record.kinesis.data, 'base64').toString('ascii');
        console.log("Received an event: " + payload);
    });
    callback(null, `Successfully processed ${event.Records.length} event.`);
};