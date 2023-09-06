import {useState} from "react";
import Comment from "../comments/comment"


const SinglePost=(props) => {
return (
<div className="container">
<h3>{props.post.title}</h3>
<p>{props.post.body}</p>
<div>
    <Comment postId={props.post.id} postTitle={props.post.title}/>
</div>
</div>
);
};


export default SinglePost;