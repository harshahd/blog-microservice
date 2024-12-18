import {useState, useEffect} from "react";
import SinglePost from "./singlePost";
import axios from "axios";

const GET_POSTS="http://127.0.0.1:8180/posts";

const ListPosts=(props) => {
    const [posts,setPosts]=useState([]);
    const [errorMessage,setErrorMessage]=useState("Unable to load any posts");
    useEffect(() => {
        if(posts.length==0) {
            getAllPosts();
}
    }, [posts]);

    const getAllPosts=async () => {
            await axios.get(GET_POSTS).then((rsp) => {
                if(rsp.status==200) {
                    setPosts(rsp.data.posts);
                }
                else {
                    setErrorMessage("Unable to load any posts");
                }
            }).catch((err) => {
                console.log(err);
                setErrorMessage("Unable to communicate with the server.");
            });
    }

const renderPosts=() => {
    if(posts.length>0) {
     return posts.map((pst) => {
        return <SinglePost post={pst}/>    
        });
    }
    else {
        return <p>{errorMessage}</p>
    }
}

return (
<div className="container">
<h2>All posts</h2>
{renderPosts()}
</div>
);
};




export default ListPosts;