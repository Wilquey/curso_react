import "./Mega.css";
import React, { useState } from "react";

// eslint-disable-next-line
export default (props) => {
  // eslint-disable-next-line
  function gerarNumeroNaoContido(min, max, array) {
    const aletorio = Math.floor(Math.random() * (max + 1 - min)) + min;
    return array.includes(aletorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aletorio;
  }

  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        console.log([...nums, novoNumero]);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }

  console.log(gerarNumeros(7));

  const [qtde, setQtde] = useState(props.qtde || 6);
  // eslint-disable-next-line
  const numerosIniciais = gerarNumeros(qtde);
  // eslint-disable-next-line
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label>Qtde de números</label>
        <input
          min="6"
          max="15"
          type="number"
          value={qtde}
          onChange={(e) => {
            setQtde(+e.target.value)
            setNumeros(gerarNumeros(+e.target.value))
        }}
        />
      </div>
      <button onClick={(_) => setNumeros(gerarNumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
};
