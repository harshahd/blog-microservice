const express=require('express');
const crypto=require('crypto');
const {newComment,getComments}=require("./utils/ManageComments");
const cors=require('cors');
app=express();

let comments=[];


app.use(cors({origin:"*"}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/post/:id/comments", (req, resp) => {
    const result=getComments(req.params['id']);
resp.status(200).json(result);        
});

app.post("/post/:id/comment", (req, resp) => {
    const cid=newComment(req.params['id'], req.body);
resp.status(201).json({"status":201,"comment_id":cid});
console.log(comments);
});

app.post("/event", (req,resp) => {
    const type=req.body.type;
    switch(type) {
        case "create_comment":
            {
                console.log("Comment create event received");
                break;
            }
        case "get_all_comments": {
            console.log("Get all comments event received");
        }
        default:
            break;
    }
    resp.json({status:200,event:type});
    });
        

app.listen(8081, () => {
console.log("Comment service running in 8081");
});