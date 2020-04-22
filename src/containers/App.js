import React, {Component} from 'react';

import classes from  './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component{
//  const App = props => {

  constructor(props){
    super(props);
    console.log('[App.js] Constructor ');
  }
 
  state =  ({
    persons: [
      { id: 'qq',name: 'max', age: 28 },
      { id: 'we',name: 'saari', age: 26 }
    ], 
    buttonText:'Show Persons'
  });
     
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getderivedstatefrom props ', props);
    return state;
  }

  componentWillMount(){
    console.log('[App.js] component will mount ');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate ');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate ');
  }

  componentDidMount(){
    console.log('[App.js] component did mount ');
  }


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

  //ANCHOR 
  addNewPersonCard = () => {
    
    let newPersons = {
      id : Math.random() * 4000,
      name: '',
      age: Math.floor(Math.random()*40),
    }  
    const persons = [...this.state.persons, newPersons];
    this.setState({
      persons: persons
    })
      console.log('[App.js] addNewPersonCard state ', this.state);
  }

  render() {
    console.log('[App.js] Render method ');
    console.log('[App.js] render method state  ', this.state);
    console.log('[App.js] render method state showPerson  ', this.state.showPersons);

    let persons = null;
    let personAddButton = null;

    if (this.state.showPersons) {
    
      persons = 
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
           />
      
           console.log('[App.js] render method state persons  ', {persons});
      
      personAddButton = <button className={classes.AddButton} onClick={this.addNewPersonCard}>Add Person</button>
          
    };


  return (
    
    <div className={classes.App}>
      <Cockpit
        title={this.props.appTitle}
        persons={this.state.persons}
        click={this.togglePersonHandler}
        buttonText = {this.state.buttonText}
        showPersons={this.state.showPersons}
      />
      {/*// render persons component */}
      {persons}
      {personAddButton}
    </div>  
    
  );
  } //render close
}

export default App;
