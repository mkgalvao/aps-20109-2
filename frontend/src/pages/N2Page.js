import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

export function Content() {
  return (
    
    <div className="App">

    <nav className='App-nav'>
      <div className="Nav-wrapper">
        <Link className="Nav-item" to="/">Home</Link>
        <Link className="Nav-item" to="/">User</Link>
      </div></nav>

    <h1> O problema dos agrotóxicos: </h1>
    <h3>O que são agrotóxicos? </h3>
    <p>Agrotóxicos são, segundo o Ministério da Agricultura, Pecuária e Abastecimento, produtos químicos,
       físicos ou biológicos utilizados nos setores de produção agrícola, pastagens, entre outros, com o
        objetivo de alterar a composição química tanto da flora quanto da fauna a fim de preservá-las.
         O uso está associado a problemas ambientais e de saúde, segundo pesquisas feitas por órgãos como
          a Organização Mundial da Saúde e a Agência Nacional de Vigilância Sanitária. São também 
          conhecidos como defensivos agrícolas, agroquímicos e pesticidas.</p>

    <div className="List-container">
    <h2>Os 5 piores agrotoxicos no Brasil</h2>   
    <ul>
    <li>Organoclorados </li>
    <li>Organofosforados</li>
    <li>Carbamatos</li>
    <li>Paraquat</li>
    <li>Clorofenóxicos</li>
    </ul>
        
    </div> 

   </div>
       
    
  );
}

export default Content;
