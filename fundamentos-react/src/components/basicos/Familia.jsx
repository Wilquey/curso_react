// import "./Card.css";
import React, { cloneElement } from "react";

// eslint-disable-next-line
export default (props) => {

    return (
        <div>
            {props.children.map((child, index) => {
                return cloneElement(child, { ...props, key: index});
            })}
        </div>
    );
};