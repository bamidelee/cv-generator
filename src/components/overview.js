import React from "react";
import '../styles/overview.css';

function Overview (prop){
  
    return (
        <div>
           <button onClick={prop.edit} id={prop.id}>Edit</button>
           <button onClick={prop.submit}>Submit</button>
        </div>
    )
}
export {Overview};