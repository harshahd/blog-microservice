import {useState} from "react";
import Axios from "axios";
import axios from "axios";

const Post=() => {
const [title,setTitle]=useState("");
const [body,setBody]=useState("");
const onPostSubmit=async (e) => {
e.preventDefault();
const data={"title":title,"body":body};
const eventBase="http://localhost:8082/event";
await axios.post(eventBase, {type:"create_post",data:data});
// const baseurl="http://127.0.0.1:8080/post";
const baseurl="http://127.0.0.1:8080/post";
await axios.post(baseurl, data).then((rsp) => {
alert(rsp.status);
}).catch((err) => {
alert(err);
});
};

return (
<div id="new-post">
<h1>Create new post</h1>
<form onSubmit={(e) => onPostSubmit(e)}>
    <div className="row">
<label htmlFor="ptitle" className="col-sm">Enter the title for the post</label>
<input id="ptitle" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="col-lg"/>
</div>
<div className="row">
<label htmlFor="pbody" className="col-sm">Enter the content for the post</label>
<textarea id="pbody" maxLength={500} required onChange={(e) => setBody(e.target.value)} className="col-lg"/>
</div>
<input type="submit" value="Create new post" className="btn-primary center-block"/>
</form>
</div>
);

};

export default Post;