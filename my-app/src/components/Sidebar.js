import React from 'react';
import css from '../css/Sidebar.module.css';
//const FunctionalGreetingWithProps = (props) => {
    //console.log(props);
    //return <h1>Hello,{props.name}! I see you're {props.age} years old , {props.greeting}</h1>;
//}
function Sidebar(){
    
    return (
        <div className={css.sidebar}>
            <a href = "#." target= "_blank">My Photos</a>
            <a href = "#." target= "_blank">My Illustrations</a>
            <a href = "#." target= "_blank">My Paintings</a>
        </div>
    );
}

//export default FunctionalGreetingWithProps;
export default Sidebar;