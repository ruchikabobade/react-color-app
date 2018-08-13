import React from "react";
import DisplayCustomer from "./displayCustomer";

class Customer extends React.Component {
    
    render() {
      let rows = []
      rows= (this.props.customers === undefined) ? [] :  this.props.customers.map((customer) => (
           <DisplayCustomer
            key={'customer-' + customer.id}
            customer = {customer}
            ></DisplayCustomer>
        ));

        return (
            <div>
                    <button onClick={()=>{this.props.handleClick()}}>Click</button>
        {rows}
            </div>
        )
    }
}

export default Customer;

