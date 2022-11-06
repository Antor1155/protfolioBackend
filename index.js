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
    console.log("req is:" + req.body.obj);
    console.log("req is:" + req.hostname);
    res.send( {obj:"this is response send to the website back"});
})

app.listen(port, ()=>{
    console.log("this port is listening to " + port)
});
