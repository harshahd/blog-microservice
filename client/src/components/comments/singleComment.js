import {useState} from "react";

const SingleComment=(props) => {
return (
<li className="list-group-item" key={props.comment.comment_id}>{props.comment.comment}</li>
);
};


export default SingleComment;