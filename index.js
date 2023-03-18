const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("AWS Testing with server 1");
})

app.listen(3030, ()=>{
    console.log("server is running at port 3030");
})
