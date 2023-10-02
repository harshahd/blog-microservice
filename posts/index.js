const express=require('express');
const crypto=require('crypto');
const cors=require('cors');
const app=express();

app.use(cors({origin:'*'}));


const posts=[];

app.use(express.json());


app.get("/posts", (req, resp) => {
resp.status(200).json({"status":200,"posts":posts});
});

app.post("/post", (req, resp) => {
    const pid=crypto.randomBytes(4).toString('hex');
const title=req.body.title;
const body=req.body.body;
posts.push({"id":pid,"title":title,"body":body});
resp.status(201).json({"status":201,"post_id":pid});
// for status
});

app.post("/event", (req,resp) => {
if(req.body.type==="create_post") {
    console.log("event "+req.body.type+" received!");
    /*
    const pid=crypto.randomBytes(4).toString('hex');
const title=req.body.data.title;
const body=req.body.data.body;
posts.push({"id":pid,"title":title,"body":body});
*/
resp.status(201).json({"status":201});
}
else if(req.body.type==="display_posts") {
    console.log("event "+req.body.type+" received!");
    resp.status(200).json({"status":200});
}
else {
    resp.status(400).json({status:400,message:"request is not associated with this event"});    
}
});

app.listen("8080", () => {
console.log("Running posts at 8080");
});
