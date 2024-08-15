var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to:   '+16822604000',
    from: '+18559312875'
})
.then((message) => console.log(message.sid));








