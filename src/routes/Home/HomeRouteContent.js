import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Navbar} from './../../components/index'


const styles = theme => ({
    body: {
    }

});
class HomeRouteContent extends Component {
    state= {}
    render(){
        const { classes } = this.props
        return(
            <div className={classes.body}>
                <Navbar></Navbar>
            </div>
        );
    }
}

export default withStyles(styles)(HomeRouteContent)