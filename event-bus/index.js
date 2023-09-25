const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();


app.use(express.json());
app.use(cors({origin:'*'}));


app.listen(8082, () => {
console.log("App started at port 8082");
});