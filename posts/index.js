const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const axios=require('axios');
const {newPost,getAllPosts}=require("./utils/managePosts");
const app=express();

app.use(cors({origin:'*'}));




app.use(bodyParser.json());


app.get("/posts", (req, resp) => {
    axios.post("http://localhost:8182/event", {"type":"get_all_posts"});
    console.log("Emitted created_post");
    let posts=getAllPosts();
    resp.status(200).json({"status":200,"posts":posts});
});

app.post("/post", (req, resp) => {
    axios.post("http://localhost:8182/event", {"type":"create_post"});
    console.log("Emitted get_all_posts");
    const {title,body}=req.body;
    let pid=newPost(title,body);
    resp.status(201).json({"status":201,"post_id":pid});
// for status
});

app.post("/event", (req,resp) => {
const type=req.body.type;
switch(type) {
    case "create_post":
        {
            console.log("create_post event received");
            break;
        }
    case "get_all_posts": {
        console.log("get_all_posts event received");
    }
    default:
        break;
}
resp.json({status:200,event:type});
});





app.listen("8180", () => {
console.log("Running posts at 8080");
});
