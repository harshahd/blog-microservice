import {useState, useEffect} from "react";
import Post from "./components/posts/Post";
import Axios from "axios";
import ListPosts from "./components/posts/listPosts";




const App=() => {

return (
    <div className="container" role="main">
<h1>Blog</h1>
<p>Welcome to blog</p>
<ListPosts/>
    <Post/>
</div>
);
};


export default App;