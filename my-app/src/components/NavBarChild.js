import React from 'react';

//const FunctionalGreetingWithProps = (props) => {
    //console.log(props);
    //return <h1>Hello,{props.name}! I see you're {props.age} years old , {props.greeting}</h1>;
//}
function NavBarChild(props) {
    return (
        props.isLoggedIn ?
        <button onClick={props.handleClick}>Login</button>
        :
        <form>
            <label htmlFor = "username">Username:</label>
            <input placeholder="username" id="username"/>
        
            <label htmlFor = "password">Password:</label>
            <input placeholder="password" id="password"/>
            <button  onClick={props.handleClick}>Submit</button>
        </form>
    )
}

export default NavBarChild