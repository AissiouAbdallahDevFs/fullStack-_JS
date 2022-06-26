const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()
app.use(express.json())
app.use(express.static('front/build'))
app.get('/api/home',( _,res)=>{
    res.send({
        msg: "hello new fullStack dev"
    })
})
app.get('/*', ( _,res)=>{ 
    res.sendFile(path.join(__dirname,'./front/build/index.html'))
})
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`serv on in port :${PORT}`)
})