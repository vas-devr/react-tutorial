const person = (props) => {
    //console.log('[person.js] rendering... ');
    return(
        <div className={classes.Person}>
            <p onClick={props.clicked}> I am {props.name} and I am {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>

        </div>
    );
}


<div className="Person" >
<StyledDiv>

    <p onClick={props.clicked}> I am a {props.name} and {props.age} person</p>
    <p> {props.children}</p> 
    <input type="text" onChange={props.changed} value={props.name}/>
</StyledDiv> 
</div>


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
