import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../action-types/quanitity-types";

const initialState =[
   {
   name: "Valencia",
   image: "https://images.unsplash.com/photo-1517414321955-d87d58b2bb45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuZGFyaW4lMjB0cmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
   price: 41.99,
   size: "1 gallon",
   quantity: 1
   },
   {
    name: "Tangerine",
    image: "https://images.unsplash.com/photo-1579169825453-8d4b4653cc2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRhbmdlcmluZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 36.99,
    size: "1 gallon",
    quantity: 1
    },
    {
        name: "Lime",
        image: "https://images.unsplash.com/photo-1598827903408-47bdc085921d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGltZSUyMHRyZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 37.99,
        size: "1 gallon",
        quantity: 1
    },
    {
        name: "Lemon",
        image: "https://images.unsplash.com/photo-1452953523127-a0949218fc33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxlbW9uJTIwdHJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 37.99,
        size: "1 gallon",
        quantity: 1
    },
    {
        name: "Grapefruit",
        image: "https://images.unsplash.com/photo-1561003898-c2749bc2f541?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGVmcnVpdCUyMHRyZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 45.99,
        size: "1 gallon",
        quantity: 1
    },
    {
        name: "Clementine",
        image: "https://images.unsplash.com/photo-1516613835066-91cb1a42dda5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlbWVudGluZSUyMHRyZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 35.99,
        size: "1 gallon",
        quantity: 1
    },
   
]

const ShopInfo = (state=initialState, action) => {
    switch(action.type){
        case INCREMENT_QUANTITY:
            const addAmount = state;
            const addAmountFiltered = addAmount.filter((tree)=> action.payload.quantity += 1);
            return addAmountFiltered   
        
      
           
            
        case DECREMENT_QUANTITY:
            if (action.payload.quantity > 0){
                const deleteAmount = state;
                const deleteAmountFiltered = deleteAmount.filter((tree)=> action.payload.quantity -= 1);
                return deleteAmountFiltered  
            } else {
               
                return state
            }
             
           
        default:
            return state
    }
}

export default ShopInfo;