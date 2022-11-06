const port = process.env.PORT || 5000;

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("res from app .get")
})


// this part is to send mail to my gmail 
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'md.antor1155job@gmail.com',
        pass: 'oykggaypditeiaza'
    }
});


// when get post mail form protfolio website, then send mail to my email 
app.post("/email", (req, res) => {
    console.log(req.body.email);

    if (req.body.email) {
        let mailOptions = {
            from: 'md.antor1155job@gmail.com',
            to: 'md.antor1155@gmail.com',
            subject: req.body.subject,
            text: req.body.email
        };

        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log("error", error);
            res.send({result:"error, Antor must check backend server"})
          } else {
            console.log('Email sent: ' + info.response);
            res.send({result:"success, ANTOR did to job perfectly"})
          }
        });
    }


    // res.send({ result: "there was no mail in the package" });
})





// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log("error", error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

app.listen(port, () => {
    console.log("this port is listening to " + port)
});
