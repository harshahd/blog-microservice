const express=require('express');
const {newComment,getComments}=require("./utils/ManageComments");
const cors=require('cors');
const { default: axios } = require('axios');
app=express();




app.use(cors({origin:"*"}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/post/:id/comments", (req, resp) => {
    const result=getComments(req.params['id']);
return resp.status(200).json(result);        
});

app.post("/post/:id/comment", async (req, resp) => {
    const cid=newComment(req.params['id'], req.body.comment);
await axios.post("http://localhost:8185/event", {type:"new_comment", data:{id:cid,comment:req.body.comment}});
resp.status(201).json({"status":201,"comment_id":cid});
});

app.post("/event", (req,resp) => {
    const type=req.body.type;
    switch(type) {
        case "new_comment":
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
        

app.listen(8181, () => {
console.log("Comment service running in 8181");
});