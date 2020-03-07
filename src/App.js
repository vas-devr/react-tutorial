import React, {Component} from 'react';
//import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
//  const App = props => {
 
  state =  ({
    persons: [
      { name: 'max', age: 28 },
      { name: 'saari', age: 26 }
    ], 
    
  });
     

  switchNameHandler = (newName) => {
    //console.log('Was Clicked');   
    //this.state.persons[0].name = 'maxi0';
    this.setState ({
      persons: [
        { name: 'Max', age: 30 },
        { name: newName, age:30 }
      ], 
      otherState: 'personsState.otherState'
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age:29 },
        { name: event.target.value, age:29}
      ]
    })
  };

  render() {
  return (
    <div className="App">
      <h1>Hi There</h1>
      <h1>test aother </h1>
      <div>tester</div>
      <button onClick={() => this.switchNameHandler('Vashu')}>Switch Name</button>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} click={() => this.switchNameHandler('Vashudeb')}
        changed={this.nameChangedHandler}
      > Vasudev
        </Person>
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age} click={() => this.switchNameHandler('Vashud')}
        changed={this.nameChangedHandler}
      > Vasudev
        </Person>
    </div>   
  );

  //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'am react app'));
  } //render close
}

export default App;
