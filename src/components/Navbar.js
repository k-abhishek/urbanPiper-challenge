import React, { Component }  from  'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BurgerMenu from './BurgerMenu';
import './Navbar.css'

const styles = {
  grow: {
    flexGrow: 1,
    color: '#000',
    textAlign: 'center',
    
  },
  menuButton: {
    position: 'relative',
    color: '#fff',
    display: 'inline',
    verticalAlign: 'sub',
    float: 'left',
  },
  headerName:{
    padding: 0,    
    fontSize: '2rem',
    paddingRight: '1rem'
  },
  restContent:{
    fontSize: '1.5rem',
    padding: '2rem'
  }
};

class Navbar extends Component {

    state={
        open: JSON.parse(window.localStorage.getItem('open'))
    }

    handleBurgerOpen = () => {
      window.localStorage.setItem('open', 'true');
      this.setState({open:true})
    } 

    handleBurgerClose = value => {
      window.localStorage.setItem('open', 'false');
      this.setState({open: value})
    }

    render(){
        const { classes } = this.props;
        return (
            <div className={'docContainer'}>
            <div className={"topnav"}>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.handleBurgerOpen} ref={node=>this.node= node}>
                    <MenuIcon />
                </IconButton>
            </div>
            <div className={'allMenu'}>                
                <span className={classes.headerName}>UrbanPiper Challenge</span>
            </div>
            <div className={classes.restContent}>
	              <p>1) Explain why it’s right implementation according to you & What are the performance benefits?</p>
                <p><small><b>Ans.</b> Only Navbar.js can manage State and send the props to the child component. So if the state is maintained in only one place so un-necessary renderings can be controlled. </small></p>

	              <p>2) What is wrong in this implementation with respect to right one?</p>
                <p><small><b>Ans.</b> Having state for all component will make the component management a bit complicated.</small></p>

                <p>3) Explain event bubbling with this example - Introduce a bug in your code which is caused by event bubbling - how to resolve it?</p>
                <p><small><b>Ans.</b> When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. This is called Event Bubbling.<br/> 
                <b>Bug in code:</b> For menu bar to be closed we had to set a listener on the body, but the menu bar is also a part of the body and on click on the menu items the menu bar was getting closed. <br/> 
                <b>Solution:</b> I added a backdrop to the menu bar and stopped the propagation of the event to that backdrop itself i.e. instead of listening click action on the whole body we are listening event only on backdrop.</small></p>
                </div>
                <CSSTransitionGroup
                  transitionName="example"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}>
                  {this.state.open?<BurgerMenu handleClose={this.handleBurgerClose}  open={this.state.open}/>:null}
                </CSSTransitionGroup>
            </div>
        );
    }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);