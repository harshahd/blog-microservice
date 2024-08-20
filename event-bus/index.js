const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const axios=require('axios');


app.use(express.json());
app.use(cors({origin:'*'}));

app.post("/event", (req,res) => {
axios.post("http://localhost:8180/event", req.body).catch((err) => {
    console.log(err);
});
axios.post("http://localhost:8181/event", req.body).catch((err) => {
console.log(err);
});
res.status(200).json({status:200,message:"success"});
});

app.listen(8182, () => {
console.log("App started at port 8082");
});