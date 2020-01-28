import React, {Component} from 'react';
import "./Button.scss";

const Button = ({text}) => {
    return ( 
    <div className = "button" >
        <a href="https://virgool.io/@fadela"> {text} </a> 
        </div >
    )
}

export default Button;