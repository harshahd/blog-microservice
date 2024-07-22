import {useState, useEffect} from "react";
import SingleComment from "./singleComment";

const ListComments=(props) => {
//    alert(JSON.stringify(props.opinions));
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
};




export default ListComments;