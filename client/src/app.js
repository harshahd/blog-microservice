import {useState, useEffect} from "react";
import Post from "./components/posts/Post";
import Axios from "axios";
import ListPosts from "./components/posts/listPosts";




const App=() => {
const [allPosts,setAllPosts]=useState([]);

const getAllPosts=async () => {
    // const getPost={type:"display_posts",data:[]};
    const eventBase="http://localhost:8082/event";
    // await Axios.post(eventBase, {type:"display_posts"});
await Axios.get("http://127.0.0.1:8080/posts").then((rsp) => {
if(rsp.status===200) {
// setAllPosts(rsp.data.posts);
setAllPosts(rsp.data.posts);
}
}).catch((err) => {
alert(err);
});
};

useEffect(() => {
getAllPosts();
}, []);

return (
    <div className="container" role="main">
<h1>Blog</h1>
<p>Welcome to blog</p>
<Post/>
<ListPosts posts={allPosts}/>
</div>
);
};


export default App;