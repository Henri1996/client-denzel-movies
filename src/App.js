import React, { Component } from 'react';
import GetOneMovie from './mesCompo/OneMovie';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-center title">10 ramdom movies from the Denzel's best movies :</h1>
      
      <br></br><br></br>
      <GetOneMovie/>
      </div>
    );
  }
}

export default App;
