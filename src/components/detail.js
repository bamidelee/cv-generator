import React from "react";
import '../styles/details.css';

function Details (prop) {
    if(prop.editing === prop.section)
    {
        return null;
    }
    return (
        <div className="detailsDiv">
            <h3 className="detailsH3">{prop.att}:</h3>
            <p className="detailsP">{prop.detail}</p>
        </div>
    )
}

export {Details};