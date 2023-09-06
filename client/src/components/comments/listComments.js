import {useState, useEffect} from "react";
import SingleComment from "./singleComment";

const ListComments=(props) => {
return (
<div className="container">
<h2>All posts</h2>
{props.comments.length===0 || props.comments===undefined?<p>No comments for this post</p>:props.comments.map((pst) => {
return <SingleComment commentText={pst.comment}/>    
})}
</div>
);
};




export default ListComments;