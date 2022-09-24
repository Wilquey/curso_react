import './App.css'
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
// eslint-disable-next-line
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
// eslint-disable-next-line
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
// eslint-disable-next-line
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

// eslint-disable-next-line
export default () => (
  <div className="App">
    
    <h1>Fundamentos React (Arrow)</h1>

    <div className="Cards">
      <Card titulo="#13 - Desafio Mega Sena" color="#B9006E">
        <Mega></Mega>
      </Card>
      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={10} ></Contador>
      </Card>
      <Card titulo="#11 - Componente Controlado" color="#E45F56">
        <Input ></Input>
      </Card>
      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai ></IndiretaPai>
      </Card>
      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai ></DiretaPai>
      </Card>
      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={20}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
        <UsuarioInfo usuario={{ email: "fernando@gmail.com" }}></UsuarioInfo>
        <UsuarioInfo usuario={{ }}></UsuarioInfo>
      </Card>
      <Card titulo="#07 - Desafio" color="#3A9AD9">
        <TabelaProdutos></TabelaProdutos>
      </Card>
      <Card titulo="#06 - Repeticao" color="#FF4C65">
        <ListaAlunos ></ListaAlunos>
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro"></FamiliaMembro>
          <FamiliaMembro nome="Ana"></FamiliaMembro>
          <FamiliaMembro nome="Gustavo"></FamiliaMembro>
        </Familia>
      </Card>    
      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60}></Aleatorio>
      </Card>
      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento></Fragmento>
      </Card>
      <Card titulo="#02 - Com Parâmetros" color="#E8B71A">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Pedro"
          nota="9.3"
        ></ComParametro>
      </Card>
      <Card titulo="#01 - Primeiro" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
