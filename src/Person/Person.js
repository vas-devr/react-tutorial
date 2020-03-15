import React from 'react';
//import Radium from 'radium';
import styled from 'styled-components';

const StyledDiv = styled.div 
                    `width: 60%;
                    margin: 10px auto;
                    border: 1px solid #eee;
                    box-shadow: 0px 2px 3px 1px #ccc;
                    border-radius:  10px;
                    padding: 16px;
                    text-align: center;
                    @media (min-width: 500px) {
                        width: 450px
                    }`;

                    const rand = Math.random();
                    if( rand >= 0.7 ){
                        throw new Error('Something went wrong');
                    }

const person = (props) => {
   /*  const style={
        '@media (min-width: 500px)':{
            width: '450px'
        }
    } */


    return (
        //<div className="Person" >
       <StyledDiv>

            <p onClick={props.click}> I am a {props.name} and {props.age} person</p>
           {/*  <p> {props.children}</p> */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    );
};

export default person;

