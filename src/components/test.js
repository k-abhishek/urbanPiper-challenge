import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './BurgerMenu.css'

class BurgerMenu extends Component {

  state={
    openSidebar: this.props.open
  }

  componentDidMount() {
    // when the menu becomes visible, setup some handlers so we can close the menu easily
    if (this.state.openSidebar === true) {
      document.addEventListener('keydown', this.handleKeyPress);
      document.querySelector('#backDrop').addEventListener('click', this.handleClick, false );
    }
    else {
      document.removeEventListener('keydown', this.handleKeyPress);
      document.querySelector('#backDrop').removeEventListener('click', this.handleClick, false);
    }
    
  }

  handleClick = e => {
    
    if (this.state.openSidebar) {
      this.props.handleClose(false)
    }
  }
  
  handleKeyPress = (e) => {
    if(e.keyCode === 27 && this.state.openSidebar) {
      this.props.handleClose(false)
    }
  }

  updateUrl = e => {
    this.props.history.push(``);
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
          <a href="#About">About</a>
          <a href="#Services">Services</a>
          <a href="#Clients">Clients</a>
          <a href="#Contact">Contact</a>
        </div>
    </>
  );
  }
}

export default withRouter(BurgerMenu);