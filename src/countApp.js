import React, { useState } from "react";
import "./countApp.css"
import Show from "./imageApp";

function Counter(props)
{

    let [countValue, setCountValue] = useState(1);


return(
    <div className="count">
        <h1 className="title"> Counter Component!</h1>
        <h3 className="lines"> Count value before button click = {countValue++}</h3> 
        <button class="buttons" onClick={ ()=> setCountValue(20)}>Count Button</button>
        <h3 className="lines"> Count value after button click: {countValue}</h3>
        <hr></hr>

       <Show />
        
        </div> 
);

}

export default Counter;