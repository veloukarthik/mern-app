const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("I am running via github workspace")
})


app.listen(5000,(()=>{
    console.log("server is running 5000 port number");
}))