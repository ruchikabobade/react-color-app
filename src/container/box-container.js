import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import Box from "../component/box.js";
import Customer from "../component/box.js"

class BoxCon extends React.Component{
    render(){
        return(
            <Customer handleClick={this.props.loadCustomer} customers={this.props.customers}></Customer>
        )
    }
}


const mapStateToProps=(state)=>{
    return {
       customers: state.customers
    };
};

export default connect (mapStateToProps, actionCreators)(BoxCon);