import {useState, useEffect} from "react";
import ListComments from "../comments/listComments";
import axios from "axios";
import Comment from "../comments/comment";
const SinglePost=(props) => {
const {comments,setComments}=useState([]);
const getAllComments=async () => {
const url="http://127.0.0.1:8081/post/"+props.post.id+"/comments";
await axios.get(url).then((rsp) =>
{
setComments(rsp.data.comments);
}).catch((err) => {
console.log("comments loading error "+err);
});
    };

    
    useEffect(() => {
getAllComments();
    }, []);

return (
<div className="container">
<h3>{props.post.title}</h3>
<p>{props.post.body}</p>
<div>
    <h3>Comments for {props.post.title}</h3>
    {
        comments!==undefined && comments.length>0 &&    <ListComments opinions={comments}/>
}
<Comment postId={props.post.id} postTitle={props.post.title}/>
</div>
</div>
);
};


export default SinglePost;