const accountSid = 'AC1f9fd15f8d80201c1ab32e4f9f67a27f';
const authToken = '30a6524dbd32d1269fe2838399a83b02';
const client = require('twilio')(accountSid, authToken);



var sendMessage = (numbers)=>{

  numbers.forEach(element => {

    client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+17173409616',
     to: element
   })
  .then(message => console.log(message.sid))
  .done();


  });

  
};

module.exports = {sendMessage};