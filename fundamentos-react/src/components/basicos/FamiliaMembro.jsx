// import "./Card.css";
import React from "react";

// eslint-disable-next-line
export default (props) => {

    return (
        <div>
            {props.nome} <strong>{props.sobrenome}</strong>
        </div>
    );
};