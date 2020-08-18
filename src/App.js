import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id:"1", name: "zx", age: 30 },
      { id:"2", name: "rfr", age: 40 }
    ],
    showPerson: true
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "rfrr", age: 40 }
      ],
      showPerson: true
    })
  }

  nameChangedHandler = (event, index) => {
    // this.setState({
    //   persons: [
    //     { name: event.target.value, age: 30 },
    //     { name: "rfrr", age: 40 }
    //   ],
    //   showPerson: true
    // })
    const personId = this.state.persons.find( p => {
        return p.index === index;
      }
    );

    console.log(personId);

    const person = {
      ...this.state.persons[personId]
    };

    console.log(person);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[index] = persons;
    
    this.setState({persons:persons})
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index,1);
    console.log(index);
    this.setState({persons:persons});
  }

  togglePersonHandler = () => {
    this.setState({showPerson : !this.state.showPerson});
  }

  render() {

    const inlineStyle = {
      backgroundColor:'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    //let persons = null;
    let personsList = null;

      // if ( this.state.showPerson ){
      //   persons = 
      //   <div>
      //     <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
      //       click={this.switchNameHandler}
      //       changed={this.nameChangedHandler} />

      //     <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      //   </div>
      // }

      if ( this.state.showPerson ){
        personsList = (
          <div>
            {
              this.state.persons.map(
                (person, index) => {
                  return <Person
                    click={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, index)}
                  />
                }
              )
            }
          </div>
        )
      }

    return (
      
      <div className="App">
        <h1>Learning React</h1>
        <button style = {inlineStyle} onClick={() => this.switchNameHandler("zxr")}>Switch Name ES6 Performance Ineffficient</button>
        <button onClick={this.switchNameHandler.bind(this,"zxr")}>Switch Name Old Way</button>
        <button onClick={this.togglePersonHandler}>Toggle Person List</button>
        
        {/* { persons } */}
        { personsList }

        {/* <Person name="ab" age="20">My Hobbies : Studying</Person>
        <Person name="def" age="30" />
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} 
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}/>

        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} /> */}

        
      </div>
    );
  }
}

export default App;
