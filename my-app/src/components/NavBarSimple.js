import React from "react";
import css from '../css/NavBarSimple.module.css';

class NavBarSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message:'Hello, guests!',
      buttonText: "login",
      
    };
  }

  handleClick() {
    this.setState({
        message: this.state.message ==='Hello, guests!'?'Welcome back, user!':'Hello, guests!',
        buttonText: this.state.buttonText ==="login"?'logout':"login",
      
    });
    console.log(this.state.message)
    console.log(this.state.buttonText)
  }

  
  

  render() {
    return (
      <div className ={css.NavBar}>
        <h1>My Gallery</h1>
        <span>
          {this.state.message} 
        </span>
        <button onClick={() => this.handleClick()}>
          {this.state.buttonText}
        </button>
        
      </div>
    );
  }
}

export default NavBarSimple;

     