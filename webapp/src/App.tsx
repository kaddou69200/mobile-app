import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  state = {
    display: false
  }
  toto = {
    display: "Pomme"
  }
  click = () =>{
    this.toto.display = "Banane"
    this.setState({display:true})
    console.log("click")
    console.log(this.state.display)
    console.log(this.toto.display)
  }
  render(){ return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={this.click}>Click moi</button>
        {
          this.state.display && <div>T'a cliqué bouffon</div>
        }
      </header>
    </div>
  );
}
}