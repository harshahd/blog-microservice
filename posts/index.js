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

app.listen("8080", () => {
console.log("Running posts at 8080");
});
