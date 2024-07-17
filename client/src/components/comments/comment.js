import {useState} from "react";
import Axios from "axios";
import axios from "axios";

const Comment=(props) => {
const [commentText,setCommentText]=useState("");
const onCommentSubmit=async (e) => {
e.preventDefault();
const data={"comment":commentText};
// const eventbase="http://localhost:8082/event";
// await axios.post(eventbase, {type:"create_comment",data:data});
const baseurl="http://127.0.0.1:8081/post/"+props.postId+"/comment";
// const baseurl="http://127.0.0.1:8082/event";
await axios.post(baseurl, data).then((rsp) => {
alert(rsp.status);
}).catch((err) => {
alert(err);
});
};

return (
<div id={"new-comment-"+props.postId}>
<form onSubmit={(e) => onCommentSubmit(e)}>
<div className="row">
<label htmlFor={"pcmttext-"+props.postId} className="col-sm">What is your opinion about the post {props.postTitle}?</label>
<textarea id={"pcmttext-"+props.postId} maxLength={500} required onChange={(e) => setCommentText(e.target.value)} className="col-lg"/>
</div>
<input type="submit" value={"Comment your opinion about "+props.postTitle} className="btn-primary center-block"/>
</form>
</div>
);
};

export default Comment;