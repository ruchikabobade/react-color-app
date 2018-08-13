import axios from "axios";

export function loadCustomer(){
    return(dispatch)=>{
        return axios.get("http://localhost:8080/customers").then((response)=>{
            console.log("in dispatch");
            console.log("load customer" + response.data);
            dispatch(displayCustomer(response.data));
        })
    }
}

export function displayCustomer(customers){
    return{
        type:"DISPLAY_CUSTOMER",
        customers:customers
    }
}