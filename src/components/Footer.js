import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Footer from './../../components/Footer'


const styles = theme => ({
    body: {
        margin: '0 auto',
        padding: '4',
        textAlign: 'center',
        color: '#000'
    },
    fonts: {
        fontFamily: 'Amatic SC, cursive',
        fontSize: '2rem'
    },
    header: {
        fontSize: '5rem',
    },
    centerBox:{
        color:'#fff'
    }
});
class HomeRouteContent extends Component {
    state= {}
    componentDidMount(){
       
    }

    render(){
        const { classes } = this.props
        return(
            <div className={classes.body}>
                
                <Footer></Footer>
            </div>
        );
    }
}

export default withStyles(styles)(HomeRouteContent)