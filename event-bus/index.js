const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const axios=require('axios');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors({origin:'*'}));

const allEvents=[];

app.post("/event", (req,res) => {
    console.log(req.body.type+" event received.");
    const event=req.body;
    allEvents.push(event);
axios.post("http://localhost:8180/event", event).catch((err) => {
    console.log(err);
});
axios.post("http://localhost:8181/event", event).catch((err) => {
console.log(err);
});
res.status(200).json({status:200,message:"success"});
});

app.listen(8185, () => {
console.log("App started at port 8185");
});