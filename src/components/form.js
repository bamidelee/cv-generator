import React from "react";
import '../styles/form.css';

function Form (prop){
    if (prop.edit !== prop.id){
        return null;
    }
    return (
        <label className="form-label">
            <span>{prop.label}</span>
            <input type={prop.type} onChange={prop.change} value={prop.value}></input>
        </label>
    )
}
export {Form};