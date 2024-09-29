import React from "react";
import ReactDOM from "react-dom/client";

const number=10000;
const elem=<h1>Hi from element</h1>; 

const HeadingFunComponet=()=>(
    <div id="container">
        {number}
        <h1>Namasthe Bobby</h1> 
    </div> 
)

const title=(
    <div>
        <h1 className="hi">Helloworld!</h1>
        {elem}
        <HeadingFunComponet/>
    </div>
    
);

const HeadingFunComponet2=()=>{
    return(
    <div id="container">
        {title}
        <h1>Namasthe Bobby</h1> 
    </div>
    ) 
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingFunComponet2/>);
