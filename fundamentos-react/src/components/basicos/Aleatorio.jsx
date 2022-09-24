import React from "react";

// eslint-disable-next-line
export default (props) => {
    // eslint-disable-next-line
    const { min, max } = props;
    const aletorio = (Math.floor(Math.random()* (max - min)) + min);
    return (
            <div>
                <h2>Valor Aleatório</h2>
                <p><strong>Valor Mínimo: </strong> {min} </p>
                <p><strong>Valor Máximo: </strong> {max} </p>
                <p><strong>Valor Escolhido é: </strong> {aletorio} </p>                
            </div>
    );
};