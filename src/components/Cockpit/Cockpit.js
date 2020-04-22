import React, { useEffect } from 'react';
import classes from './Cockpit.css';



const cockpit = (props) => {

    /* useEffect(()=>{
        console.log('[cockpit.js] useEffect ');
    }); */
    const assignedClass = [];
    let buttonClass = classes.button;

    if(props.showPersons){
        buttonClass = classes.Red;
    }

    if(props.persons.length <= 2){
      assignedClass.push(classes.green);
    }
    if(props.persons.length <= 1){
      assignedClass.pop(classes.green);
      assignedClass.push(classes.red);
      
    }
    
    console.log('[Cockpit] rendering... ');
    return(
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <h1>Hi There</h1>
        <h1>test another </h1>
        
        <p className={assignedClass.join(' ')}>This is working</p>

        <button className={buttonClass}
          onClick={props.click}>
            {props.buttonText}
            </button>
        </div>
    );
}

export default cockpit;