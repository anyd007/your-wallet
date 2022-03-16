const express = require("express")
const path = require("path")
const cors = require("cors")
const favicon = require('serve-favicon');
const mongoose = require("mongoose");
const router = require("./router");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>{
const app = express()
app.use(cors());
app.use(express.json())
app.use("/api", router)
app.use(favicon(__dirname + '/build/favicon.ico'))
app.use(express.static(path.join(__dirname, "../client/build")))
app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})


const herokuPort  = process.env.PORT || 3002
app.listen(herokuPort, ()=>{
    console.log(`działam na porcie ${herokuPort}`);
})
})