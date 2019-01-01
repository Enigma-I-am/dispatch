const accountSid = 'AC33e9222c7d4b1442e520a48ee3806cf8';
const authToken = '87ab696a97941a360e9b50d244263be2';
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