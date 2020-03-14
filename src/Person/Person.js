import React from 'react';
import Radium from 'radium';

const person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}> I am a {props.name} and {props.age} and  {Math.floor(Math.random() * 30)} person</p>
           {/*  <p> {props.children}</p> */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default Radium(person);

