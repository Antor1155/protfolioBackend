const port = process.env.PORT ||  5000;

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors);
app.use(express.json());

app.get("/",(req, res)=>{
    res.send("running server")
})

app.listen(port, ()=>{
    console.log("this port is listening to " + port)
});
