import React from "react";
import "../styles/Wrapper.css";

function Wrapper ({ children }){
    return(
        <div className="wrapper">
            { children }
        </div>
    )
}
//Wrapper will serve as a container element to append all other components to
export default Wrapper