import React from 'react';

export default class DisplayCustomer extends React.Component{
    render(){

        return(

            <div>
            <h2>In displayCustomer</h2>
            Customer id: {this.props.customer.id}  
            Customer name: {this.props.customer.name}
            </div>
        )
    }
}