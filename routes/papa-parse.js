const parser = require('papaparse');
const fs = require('fs');
const sendMessage = require('./send_sms');
// const file = './test.csv';





var numberArray = [];


var fileparser = (file)=>{

    var content = fs.readFileSync(file,"utf8");

    parser.parse( content,{
        header: true,
        complete:(results)=>{
            
            var obj = JSON.stringify(results.data,undefined,2);
            var parsedObj =  JSON.parse(obj);
            // console.log(parsedObj);
            for (var key in parsedObj){
    
                // console.log(parsedObj[key].NUMBERS);
                var number = parsedObj[key].NUMBERS;
                var name = parsedObj[key].NAME;
    
                numberArray.push(`+${number}`);
    
                
                // console.log(`+${number} : ${name}`);
    
            }
    
            console.log(numberArray);
            sendMessage.sendMessage(numberArray);
    
        
            
        }
    });

}

module.exports = {fileparser};






