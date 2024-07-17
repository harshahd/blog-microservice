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
        let postComment={"post_id":req.params['id'],"comment":[comment]};
        comments.push(postComment);
    }
resp.status(201).json({"status":201,"comment_id":cid});
console.log(comments);
});

app.post("/event", (req,resp) => {
    if(req.body.type==="display_comments") {
        console.log("event "+req.body.type+" received!");
        /*
        let result={"status":"200","post_id":req.body.data.id,"comments":[]};
        comments.forEach((cmt) => {
            if(cmt.post_id==req.body.data.id) {
            result.comments=cmt.comment;
            }
        });
        */
    resp.status(200).json({status:200});
        }
    else if(req.body.type==="create_comment") {
        console.log("event "+req.body.type+" received!");
        /*
        const cid=crypto.randomBytes(4).toString('hex');
        let comment={"comment_id":cid,"comment":req.body.data.comment};
        let contains_post=false;
            comments.forEach((cmt) => {
        if(cmt.post_id==req.body.data.post_id) {
        cmt.comment.push(comment);
        contains_post=true;
        }
            });
            if(!contains_post)
            {
                let postComment={"post_id":req.body.data.post_id,"comment":comment};
                comments.push(postComment);
            }
        resp.status(201).json({"status":201,"comment_id":cid});
        console.log(comments);
        */
        resp.status(200).json({status:200});
    }
    else {
                resp.status(400).json({status:400,message:"Event not associated with this request"});
    }
    });
    

app.listen(8081, () => {
console.log("Comment service running in 8081");
});