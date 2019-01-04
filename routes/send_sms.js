const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);



var sendMessage = (numbers)=>{

  numbers.forEach(element => {

    client.messages
  .create({
     body: 'All systems are a go',
     from: '+16263402330',
     to: element
   })
  .then(message => console.log(message.sid))
  .catch((err)=>{
    console.log(err);
  })
  .done();


  });

  
};

module.exports = {sendMessage};