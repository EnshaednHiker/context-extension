import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import styles from '~/assets/styles/sidebar.css';
import { active } from '~/event/actions';


export class Sidebar extends React.Component {
    constructor(props){
        super()
        console.log(props);
    }


    onClick () {
        this.props.dispatch(active(true));
    }

    render(){
       console.log("render: ",this.props); 
       return <div></div>
    }

}

const mapStateToProps = state => {
    console.log("state mapstatetoprops: ", state);
    
    return ({
        active: state.sidebar.active
    })
}

const mapDispatchToProps = dispatch => {
    return ({
       active : this.props.dispatch(active(false))
    })
}

export default connect(mapStateToProps)(Sidebar);