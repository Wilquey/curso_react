// import "./Card.css";
import React from "react";
import Alunos from "../../data/alunos";

// eslint-disable-next-line
export default (props) => {
  // eslint-disable-next-line  
  const alunoLi = Alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} -> {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {alunoLi}
      </ul>
    </div>
  );
};
