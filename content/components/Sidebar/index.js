import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import styles from '~/assets/styles/sidebar.css';
import { active } from '~/event/actions';
import { If, Then, Else } from 'react-if';
import $ from 'jquery';

export class Sidebar extends React.Component {
    constructor(props){
        super()
        
    }


    onClick () {
        this.props.dispatch(active(true));
    }

    componentWillReceiveProps (props) {
        console.log(props);
        let cachedBody = document.body;
        if (props.active===true){
            $('#idOfAmazingProperties').show();
        }
    }

    render(){
    const styles = {
        maxWidth:"30%",
        width: "30%",
        height: "100%",
        display: "block",
        position: "absolute",
        backgroundColor: "#495865",
        zIndex: "2147483647",
        alignContent: "right"
    }
    console.log("this: ", this);
       return (
           
            <If condition={this.props.active===true}>
                <Then>
                    <div style={styles}>

                    </div>
                </Then>
                <Else>{() => <span></span> }</Else>
            </If>
       );
    }

}

const mapStateToProps = state => {
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