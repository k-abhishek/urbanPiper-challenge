import React, { Component } from 'react';
import './BurgerMenu.css'

class BurgerMenu extends Component {


  componentDidMount() {
    // when the menu becomes visible, setup some handlers so we can close the menu easily
    if (this.props.open === true) {
      document.addEventListener('keydown', this.handleKeyPress);
      document.querySelector('#backDrop').addEventListener('click', this.handleClick, false );
    }
    else {
      document.removeEventListener('keydown', this.handleKeyPress);
      document.querySelector('#backDrop').removeEventListener('click', this.handleClick, false);
    }
    
  }

  handleClick = e => {
    
    if (this.props.open) {
      this.props.handleClose(false)
    }
  }
  
  handleKeyPress = (e) => {
    if(e.keyCode === 27 && this.props.open) {
      this.props.handleClose(false)
    }
  }

  closeNav = () => {
    this.props.handleClose(false)
  }
  render(){
  return (
    <>
      <div id="backDrop"></div>
      <div id="mySidepanel" className={'sidepanel'}>
          <button className={'closebtn'} onClick={this.closeNav}>×</button>
          { /*You can also send the items in an array as props and loop through it to create the <a> tags*/ }
          <a href="#About">About</a>
          <a href="#Services">Services</a>
          <a href="#Clients">Clients</a>
          <a href="#Contact">Contact</a>
        </div>
    </>
  );
  }
}

export default BurgerMenu;