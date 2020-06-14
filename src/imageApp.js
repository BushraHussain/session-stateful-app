import React, { useState } from "react";
import "./imageApp.css" ;
import "./App.css"

function Show()
{

let [input, setInput] = useState(1);

return(

<div className="divInside">

<div className="title">
    <h1> Image component  </h1>
    </div>
<div className= {`divInside ${ input ==2 ? "lexus" : "Bmw"}`}>
  
  </div>
        <button className="buttons" onClick = {()=> setInput(2)}>Show Lexus </button>
        <button className="buttons" onClick ={ ()=> setInput(3)}> Show bmw </button>
  </div>

);
}

export default Show;
