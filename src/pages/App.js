import React, {Component } from 'react';
import logo from '../pages/logo.svg';
import './App.css';
import { Input } from '../inputComponent/Input';
import { Link } from 'react-router-dom'

export class App extends Component {

onButtonClick(){
  window.location.href = '#input';
}
  render (){
  return (
    <div className="App">

      <nav className='App-nav'>
        <div className="Nav-wrapper">
        <img src={logo} className="App-logo-nav" alt="logo" />
          <Link className="Nav-item"  to="/">Home</Link>
          <Link className="Nav-item" to="/content">More</Link>
        </div></nav>

    
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            APS 2019/2
        </p>
        <button
          className="Button-submit"
          onClick={this.onButtonClick}
        >
        Click para fazer Login
        </button>
        </header>

  
        <div className="Input-wrapper" id="input"> <Input />
        </div>


        <Link className="Nav-item" to="/">up</Link>

    </div>
  );
  }
}

export default App;
