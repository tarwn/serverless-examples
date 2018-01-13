'use strict';

module.exports.handler = (event, context, callback) => {
    event.Records.forEach((record) => {
        const payload = new Buffer(record.kinesis.data, 'base64').toString('ascii');
        console.log("Received a Kinesis event: " + payload);
    });
    callback(null, `Successfully processed ${event.Records.length} Kinesis event${event.Records.length !== 1 ? 's': ''}.`);
};