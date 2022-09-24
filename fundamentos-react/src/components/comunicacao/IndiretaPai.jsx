import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

// eslint-disable-next-line
export default (props) => {
    const [texto, setTexto] = useState('?')
    const [numero, setNumero] = useState(0)
    const [bool, setBool] = useState(false)

    function fornecerInformacoes(texto, numero, bool) {
        console.log(texto, numero, bool)
        setTexto(texto)
        setNumero(numero)
        setBool(bool)
    }
       
           
    return (
            <div>
                <div>
                    <span>{texto}</span>
                    <span><strong>{numero}</strong></span>
                    <span>{bool ? 'Verdadeiro' : 'Falso'}</span>
                </div>               
                <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
            </div>
    );
};