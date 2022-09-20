import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
// eslint-disable-next-line
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

// eslint-disable-next-line
export default () => (  
  <div id="app">
    <h1>Fundamentos React (Arrow)</h1>
    <Aleatorio></Aleatorio>
    <Fragmento></Fragmento>
    <ComParametro
      titulo="Situação do aluno"
      aluno="Pedro"
      nota="9.3"
    ></ComParametro>
    <Primeiro></Primeiro>
  </div>
);
