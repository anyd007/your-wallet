const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")
const favicon = require('serve-favicon');

app.use(cors());
app.use(express.json())
app.use(favicon(__dirname + '/build/favicon.ico'))
app.use(express.static(path.join(__dirname, "build")))
app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "./build/index.html"))
})


const herokuPort  = process.env.PORT || 3002
app.listen(herokuPort, ()=>{
    console.log(`działam na porcie ${herokuPort}`);
})