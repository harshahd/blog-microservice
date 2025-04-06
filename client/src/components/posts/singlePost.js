import {useState, useEffect} from "react";
import ListComments from "../comments/listComments";
import axios from "axios";
import Comment from "../comments/comment";
const SinglePost=(props) => {
    const [comments,setComments]=useState([]);
    const getAllComments=async (pid) => {
        await axios.get(`http://localhost:8181/post/${pid}/comments`)
        .then((response) => {
            setComments(response.data.comments);
        }).catch((err) => {
            console.log(err);
        });
    };
useEffect(() => {
    if(comments.length==0)
getAllComments(props.post.id);
}, []);
return (
<div className="container">
    <div>
    <h3>Comments for {props.post.title}</h3>
<ListComments opinions={comments}/>
    </div>
<h3>{props.post.title}</h3>
<p>{props.post.body}</p>
<Comment postId={props.post.id} postTitle={props.post.title}/>
</div>
);
};


export default SinglePost;