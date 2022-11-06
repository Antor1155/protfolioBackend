const port = process.env.PORT ||  5000;

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req, res)=>{
    res.send("res from app .get" )
})

app.post("/email",(req, res)=>{
    console.log(req.body.email);
    res.send( {obj:"this is response send to the website back"});
})

app.listen(port, ()=>{
    console.log("this port is listening to " + port)
});


// this part is to send mail to my gmail 
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'md.antor1155job@gmail.com',
    pass: 'antor1155007073'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});