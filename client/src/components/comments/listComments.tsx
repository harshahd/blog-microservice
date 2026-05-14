import {useState, useEffect} from "react";
import SingleComment from "./singleComment";

const ListComments=(props) => {
//    alert(JSON.stringify(props.opinions));
if(props.opinions.length>0)
{
return (
<div className="container">
    { props.opinions.length>0 && (
<ul>
    {props.opinions.map((pst) => {
return (
<SingleComment comment={pst}/>
);
    })}
    </ul>
    )}
</div>
);
}
else
return <p>No comments available.</p>;
};




export default ListComments;