import React from "react";

function Button(props){

    return (
        <button 
            className="btn"
            onClick={props.onClick} 
            // disabled={props.disabled} 
         >
         {props.operation}

         </button>
    );
}

export default Button;