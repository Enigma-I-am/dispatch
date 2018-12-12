const express = require('express');
const multer = require('multer');

const fileParser = require('./papa-parse');

const router = express.Router();


const upload = multer({ dest: './uploads/' });


/* GET home page. */

router.get('/', function(req, res, next) {


  res.render('index', { title: 'Express' });


});


router.post('/',upload.single('csvFile'),(req,res)=>{


  // let senderName = req.body.senderName;
  // let senderNumber = req.body.senderNumber;
  // let message = req.body.message;

  // console.log(senderName);
  // console.log(senderNumber);
  // console.log(message);

  res.render('index',{
    data: req.body
  })

  
  console.log(req.body.senderName);
  console.log(req.body.senderNumber);

  if(req.file){

    console.log(req.file.path);


    fileParser.fileparser(req.file.path);


  }else{
    console.log('Error occured');
  }

  console.log(req.body.message);

  console.log('')


});




module.exports = router;
