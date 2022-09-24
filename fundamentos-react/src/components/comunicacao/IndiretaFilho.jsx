import React from "react";

// eslint-disable-next-line
export default (props) => { 
    const cb = props.quandoClicar 
    const min = 50
    const max = 70
    const gerarNumero = () => parseInt(Math.random() * (max - min)) + min 
    const gerarBool = () => Math.random() > 0.5    
    return (
            <div>
                <div>
                    Filho
                </div>
                <button onClick={_ => cb('João', gerarNumero(), gerarBool())}> 
                    Fornecer informações 
                </button>
            </div>
    );
};