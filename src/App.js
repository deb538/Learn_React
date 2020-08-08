import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name = "zxz", age=30},
      {name = "rfr", age=40}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Learning React</h1>
        <button>Switch Name</button>
        <Person name="abc" age="20">My Hobbies : Studying</Person>
        <Person name="def" age="30"/>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    );
  }
}

export default App;
