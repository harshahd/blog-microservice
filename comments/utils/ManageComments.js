const crypto=require('crypto');

let comments=[];

const newComment=(postId,cmt) => {
    const cid=crypto.randomBytes(4).toString('hex');
let comment={"comment_id":cid,"comment":cmt};
let contains_post=false;
    comments.forEach((cmt) => {
if(cmt.post_id==postId) {
cmt.comment.push(comment);
contains_post=true;
}
    });
    if(!contains_post)
    {
        let postComment={"post_id":postId,"comment":[comment]};
        comments.push(postComment);
    }
return cid;
};

const getComments=(postId) => {
    let result={"status":"200","comments":[]};
    comments.forEach((cmt) => {
        if(cmt.post_id==postId) {
        result.comments=cmt.comment;
        }
    });
    return result;
};

module.exports={newComment,getComments};