import {useState, useEffect} from "react";
import ListComments from "../comments/listComments";
import axios from "axios";
import Comment from "../comments/comment";
const SinglePost=(props) => {
return (
<div className="container">
<h3>{props.post.title}</h3>
<p>{props.post.body}</p>
</div>
);
};


export default SinglePost;