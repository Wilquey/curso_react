import './Input.css'
import React, { useState } from "react";

// eslint-disable-next-line
export default (props) => {
    
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value);
    }

    return (
            <div className="Input">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2>{valor}</h2>
                    <input value={valor} onChange={quandoMudar}></input>
                    <input value={valor} readOnly></input>
                    <input value={undefined}></input>
                </div>                
            </div>
    );
};