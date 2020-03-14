import React, {Component} from 'react';
//import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component{
//  const App = props => {
 
  state =  ({
    persons: [
      { id: 'qq',name: 'max', age: 28 },
      { id: 'we',name: 'saari', age: 26 }
    ], 
    buttonText:'Show Persons'
  });
     
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => { //returns the index if the id of the user matches
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] //spread the existing state and gets that particular person object rather than pointing to it 
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {

    const bgStyle = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      boxShadow: '0px 2px 3px  #ccc',
      borderRadius: '5px',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
    
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event,person.id)}/>
          })}
       </div>
      );

      bgStyle.backgroundColor = 'red'
    };

  return (
    <div className="App">
      <h1>Hi There</h1>
      <h1>test another </h1>
      <button
        style={bgStyle}
        onClick={this.togglePersonHandler}>{this.state.buttonText}</button>
      
      {persons}
      
    </div>  
  );

  //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'am react app'));
  } //render close
}

export default App;
