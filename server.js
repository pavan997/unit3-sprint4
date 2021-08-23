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


//products first schema
const pdSchema = new mongoose.Schema({
    pd_name : {type: String, require: true},
    price : {type: Number, require: true},
    colorId: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "color",
        require: true,
    }],
    genderId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"color",
        require:true,
    }]
},{
    versionKey: false,
})

const Product = mongoose.model("product",pdSchema)


//the second one color schema,,
const colorSchema = new mongoose.Schema({
    colorname: {type:String, require:true}
}, {
    versionKey: false,
});

const color = mongoose.model("color",colorSchema)

//..gender schema

const genderSchema = new mongoose.Schema({
    gender :{type:String,require:true}
},{
    version:false
}
)

const Gender = mongoose.model('gender',genderSchema);


///crud operations starting below

app.post("/",async(req,res)=>{
    try{
        const pro = await 
    }

})







const port = 4000;
app.listen(port,async () =>{
    await connect();
    console.log("listening on port 4000")

});
