import {useState, useEffect} from "react";
import ListComments from "../comments/listComments";
import axios from "axios";
import Comment from "../comments/comment";
const SinglePost=(props) => {
const [comments,setComments]=useState([]);
const getAllComments=async (postId) => {
const url="http://127.0.0.1:8081/post/"+postId+"/comments";
await axios.get(url).then((rsp) =>
{
//    alert(JSON.stringify(rsp.data));
// alert(comments);
    if(rsp.data.comments!==undefined)
    {
 setComments(rsp.data.comments);
//    alert(rsp.data.comments);
}
}).catch((err) => {
console.log("comments loading error "+err);
});
    };

useEffect(() => {
getAllComments(props.post.id);
// alert(JSON.stringify(allComments));
    }, []);    

return (
<div className="container">
<h3>{props.post.title}</h3>
<p>{props.post.body}</p>
<div>
    <h3>Comments for {props.post.title}</h3>
<ListComments opinions={comments}/>
<Comment postId={props.post.id} postTitle={props.post.title}/>
</div>
</div>
);
};


export default SinglePost;