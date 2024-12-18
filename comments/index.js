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

app.post("/post/:id/comment", (req, resp) => {
/*
    axios.post("http://127.0.0.1:8182/event", /*
     {
        type:"create_new_comment",
        data:req.body.comment
     });
    console.log("Emited create_new_comment event");
    */
    const cid=newComment(req.params['id'], req.body.comment);
return resp.status(201).json({"status":201,"comment_id":cid});
// console.log(comments);
});

app.post("/event", (req,resp) => {
    const type=req.body.type;
    switch(type) {
        case "create_new_comment":
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
console.log("Comment service running in 8081");
});