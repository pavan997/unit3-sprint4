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

const Color = mongoose.model("color",colorSchema)

//..gender schema

const genderSchema = new mongoose.Schema({
    gender :{type:String,require:true}
},{
    version:false
}
)

const Gender = mongoose.model('gender',genderSchema);


///crud operations starting below

app.post("/product",async(req,res)=>{
    try{
        const prod = await Product.create(req.body);
        return res
        .status(201)
        .send(prod) 
    }
    catch(err){
        return res.status(404).send(err.message);
    }

});
app.get("/product",async(req,res)=>{
    try{
        const product = await Product.find().lean().exec();
        return res
        .status(201)
        .send(product);
    }
    catch (err) {
        return res.status(200)
        .send(err.message);
    }
})



app.post("/color",async(req,res)=>{
    try{
        const clrs = await Color.create(req.body);
        return res
        .status(201)
        .send(clrs) 
    }
    catch(err){
        return res.status(404).send(err.message);
    }

});
app.get("/color",async(req,res)=>{
    try{
        const clrs = await Color.find().lean().exec();
        return res
        .status(201)
        .send(clrs);
    }
    catch (err) {
        return res.status(200)
        .send(err.message);
    }
})


app.post("/gender",async(req,res)=>{
    try{
        const gen = await Gender.create(req.body);
        return res
        .status(201)
        .send(gen) 
    }
    catch(err){
        return res.status(404).send(err.message);
    }

});
app.get("/gender",async(req,res)=>{
    try{
        const gen = await Gender.find().lean().exec();
        return res
        .status(201)
        .send(gen);
    }
    catch (err) {
        return res.status(200)
        .send(err.message);
    }
})







const port = 4000;
app.listen(port,async () =>{
    await connect();
    console.log("listening on port 4000")

});
