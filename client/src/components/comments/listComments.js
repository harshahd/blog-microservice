import {useState, useEffect} from "react";
import SingleComment from "./singleComment";

const ListComments=(props) => {
return (
<div className="container">
{props.opinions.length===0 || props.opinions===undefined?<p>No comments for this post</p>:props.opinions.map((pst) => {
return <SingleComment commentText={pst.comment}/>    
})}
</div>
);
};




export default ListComments;