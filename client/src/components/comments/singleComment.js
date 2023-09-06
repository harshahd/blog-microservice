import {useState} from "react";

const SingleComment=(props) => {
return (
<li className="list-group-item">{props.commentText}</li>
);
};


export default SingleComment;