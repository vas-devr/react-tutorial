import React from 'react';
//import Radium from 'radium';
//import styled from 'styled-components';
import classes from './Person.css';


                   

const person = (props) => {
    console.log('[Person.js] Rendering.. ');
return (
        <div className={classes.Person}>
            <p onClick={props.clicked}> I am {props.name} and I am {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>

)

}; 



export default person;

