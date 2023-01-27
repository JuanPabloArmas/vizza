import React from "react";

/**
 * Component to render a single comment
 *
 * Proptypes
 * @param {string} link of external source
 * @param {string} title of the new
 * @param {string} content of the new
 * @param {string} country of the new
 */

const New = (props) => {
    return (
    <div>
        <h1> {props.title} </h1>
        <div class ="new-square"> 
            <span> {props.content}</span>
            <span> | Read more in {props.link} </span>
            <span> | {props.country} </span>
        </div>
    </div>
    );
};

export default New;