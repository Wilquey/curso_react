import './TabelaProdutos.css';
import React from "react";
import Produtos from "../../data/produtos";

// eslint-disable-next-line
export default (props) => {
  // eslint-disable-next-line  
  function getProdutos () {
      return Produtos.map((produto, i) => {
        return (
                // eslint-disable-next-line
                <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>            
                    <td>{produto.nome}</td>            
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>            
                </tr>                
        );
      });
  }

  return (
    <div className="TabelaProdutos"> 
        <table>
          <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Produto</th>
                <th scope="col">Preço</th>
              </tr>
            </thead>
            <tbody>
                {getProdutos()} 
            </tbody>          
        </table>                  
    </div>
  );
};
