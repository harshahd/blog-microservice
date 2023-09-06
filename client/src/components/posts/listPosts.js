import {useState, useEffect} from "react";
import SinglePost from "./singlePost";

const ListPosts=(props) => {
return (
<div className="container">
<h2>All posts</h2>
{props.posts.length===0 || props.posts===undefined?<p>No posts to display</p>:props.posts.map((pst) => {
return <SinglePost post={pst}/>    
})}
</div>
);
};




export default ListPosts;