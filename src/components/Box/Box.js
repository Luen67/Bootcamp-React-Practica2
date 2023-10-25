import React from "react"; 
import "./Box.css";

const Box = (props) =>{
    const {user, grade} = props;
    return <div className="box">
            <h1>{user}</h1>
            <h2>{grade}</h2>
        </div>;
}

export default Box;