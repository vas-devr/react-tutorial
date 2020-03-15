import React, {Component} from 'react';
//import Radium, {StyleRoot} from 'radium';
//import React, { useState } from 'react';
import classes from  './App.css';
import Person from './Person/Person';
import StyledButton from './StyleComponents/StyledButton';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
//import './Person/Person.css';

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

  //ANCHOR add comments to this method
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    if(this.state.buttonText === 'Show Persons') {
      this.setState({buttonText: 'Hide Persons'})
    } else {
      this.setState({buttonText:'Show Persons'})
    }

  };

  render() {

    //FIXME this dead code must be removed
   /*  const bgStyle = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      boxShadow: '0px 2px 3px  #ccc',
      borderRadius: '5px',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'white'
      }
    }; */

    let persons = null;

    let buttonClass = [classes.Button];

    if (this.state.showPersons) {
    
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                      <Person
                      name={person.name}
                      age={person.age}
                      click={() => this.deletePersonHandler(index)}
                      changed={(event) => this.nameChangedHandler(event,person.id)}/>
              </ErrorBoundary>
          })}
       </div>
      );
      buttonClass.push(classes.Red);
    };

  return (
    //<StyleRoot>
    <div className={classes.App}>
      <h1>Hi There</h1>
      <h1>test another </h1>
      {/* <button
        style={bgStyle}
        onClick={this.togglePersonHandler}>{this.state.buttonText}</button> */}

        {/* <StyledButton alt={this.state.showPersons}
          onClick={this.togglePersonHandler}>{this.state.buttonText}</StyledButton> */}

        <button className={buttonClass.join(' ')}
          onClick={this.togglePersonHandler}>
            {this.state.buttonText}
            </button>
      
      {persons}
     
      
    </div>  
    //</StyleRoot>
  );

  //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'am react app'));
  } //render close
}

export default App;
