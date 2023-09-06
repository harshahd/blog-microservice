const express=require('express');
const crypto=require('crypto');
const cors=require('cors');
app=express();

let comments=[];


app.use(cors({origin:"*"}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/post/:id/comments", (req, resp) => {
    let result={"status":"200","post_id":req.params['id'],"comments":[]};
    comments.forEach((cmt) => {
        if(cmt.post_id==req.params['id']) {
        result.comments=cmt.comment;
        }
    });
resp.status(200).json(result);        
});

app.post("/post/:id/comment", (req, resp) => {
    const cid=crypto.randomBytes(4).toString('hex');
let comment={"comment_id":cid,"comment":req.body.comment};
let contains_post=false;
    comments.forEach((cmt) => {
if(cmt.post_id==req.params['id']) {
cmt.comment.push(comment);
contains_post=true;
}
    });
    if(!contains_post)
    {
        let postComment={"post_id":req.params['id'],"comment":comment};
        comments.push(postComment);
    }
resp.status(201).json({"status":201,"comment_id":cid});
console.log(comments);
});

app.listen(8081, () => {
console.log("Comment service running in 8081");
});