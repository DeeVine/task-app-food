import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {

    const testAlert = () => {
      console.log('testing console');
      alert('testing');
      axios.get('http://localhost:3001/sql').then(function(response) {
        console.log('the response', response.data)
      });
    }

    return (
      <button className="sqlQuery" onClick={() => testAlert()}>
        testing my button
      </button>
    )
  }
}

// function newButton() {
//   return (
//     <button>Go</button>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <MyButton/>
          <p>
            <button>Here's my stuff</button>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
