import React, { Component } from 'react';
import GetTenMovie from './mesCompo/TenMovie';
import logo from './logo.svg';
import './App.css';
import LambdaDemo from './mesCompo/LambdaDemo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-center title">10 ramdom movies from the Denzel's best movies :</h1>
        
      <br></br>
      <LambdaDemo/>
      <br></br>
      <GetTenMovie/>
      
      </div>
    );
  }
}

export default App;
