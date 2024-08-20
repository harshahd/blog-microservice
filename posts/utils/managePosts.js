const crypto=require('crypto');

const posts=[];


const newPost=(title,body) => {
const pid=crypto.randomBytes(4).toString('hex');
posts.push({"id":pid,"title":title,"body":body});
return pid;
};

const getAllPosts=() => posts;

module.exports={newPost,getAllPosts};