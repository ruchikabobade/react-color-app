
let defaultCustomer=[
        {
            "id" : 1,
            "name" : "abc",
            "addressLine1" : "xyz",
            "addressLine2" : "pqr",
            "age" : 0,
            "postCode" : 0 
        }
  
]

const customerReducer=(state=defaultCustomer,action)=>{
    if(action.type==="DISPLAY_CUSTOMER"){
        return{
            ...state,
            customers:action.customers
        }
    } else{
        return{
            ...state
        }
    }
}

export default customerReducer;