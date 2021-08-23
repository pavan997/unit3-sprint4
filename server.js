const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());


const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/OlympicDb",{
        useNewUrlParser:true,
        useNewUrlParser:true,
        useCreateIndex:true
    });
}

const port = 4000;
app.listen(port,async () =>{
    await connect();
    console.log("listening on port 4000")

});
