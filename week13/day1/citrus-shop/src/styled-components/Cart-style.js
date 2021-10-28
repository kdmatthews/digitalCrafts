import styled from "styled-components";

export const CartDiv = styled.div`
    
    /* grid-area: container; */
    width: 95vw;
    display: grid;
    grid-template-columns: 1fr;
    position: absolute;
    margin-top: 8rem;

    @media (min-width: 600px) and (max-width: 1000px){
      width: 98vw;
}
    @media (min-width: 1001px) {
        width: 98vw;
    
 }
`
export const TotalDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0;
    
`
export const CartItem = styled.div`
    
    display: grid;
    grid-template-areas:
    "picture details"
    "picture details"
    /* "picture quantity" */
    "picture price";
    grid-template-rows: auto;
    border: 1px solid lightgray;
    padding: .5rem;
    margin: .5rem;

@media (min-width: 600px) and (max-width: 1000px){
    grid-template-areas:
    "picture details price";
}
 @media (min-width: 1001px) {
    grid-template-areas:
    "picture details price";
    
 }
`
export const ImageDiv = styled.div`
    grid-area: picture;
`
export const DetailsDiv = styled.div`
    grid-area: details;

    @media (min-width: 600px) and (max-width: 1000px){
       margin-top: 2rem;
}
    @media (min-width: 1001px) {
    margin-top: 2rem;
    
 }
`
export const PriceDiv = styled.div`
    grid-area: price;
    display: flex;
    justify-content: space-evenly;
    
    @media (min-width: 600px) and (max-width: 1000px){
       margin-top: 2rem;
}
    @media (min-width: 1001px) {
    margin-top: 2rem;
    
 }
`

export const QuantityDiv = styled.div`
    grid-area: quantity;
`
export const CartImage = styled.img`
    width: 170px;
    height: 125px;
    margin-right: 0;
    margin-left: 0;

    @media (min-width: 600px) and (max-width: 1000px){
        width: 200px;
        height: 140px;
}
    @media (min-width: 1001px) {
        width: 250px;
        height: 190px;
    
 }
`

export const CartButton = styled.button`
    border-radius: 300px;
    border: none;
    height: 1.5rem;
    margin-top: 1.2rem;

    @media (min-width: 600px) and (max-width: 1000px){
       margin-top: 1.9rem;
       height: 2rem;
       width: 2rem;
}
    @media (min-width: 1001px) {
    margin-top: 2.7rem;
    height: 2.5rem;
    width: 2.5rem;
    
 }
`


export const CartPlantName = styled.h3`
    color: black;
    margin-top: .3rem;
    margin-bottom: .3rem;

    @media (min-width: 600px) and (max-width: 1000px){
        font-size: 2rem;
}
    @media (min-width: 1001px) {
    font-size: 3rem;
    
 }
   
    
    
`
export const CartSize = styled.p`
    color: black;
    margin-top: .3rem;
    margin-bottom: .3rem;

    @media (min-width: 600px) and (max-width: 1000px){
        font-size: 1.5rem;
}
    @media (min-width: 1001px) {
    font-size: 2rem;
    
 }
  
`
// export const CartQuantity = styled.p`
//     color: black;
//     margin-top: .3rem;
//     margin-bottom: .3rem;
//     border: 1.5px lightgray solid;
// `
export const CartPrice = styled.h4`
    color: black;

    @media (min-width: 600px) and (max-width: 1000px){
        font-size: 1.5rem;
}
    @media (min-width: 1001px) {
    font-size: 2rem;
    
 }
    

    
  
`






export const YourCart = styled.h2`
    margin-top: 0;
    margin-bottom: 0;

    @media (min-width: 600px) and (max-width: 1000px){
        font-size: 2rem;
}
    @media (min-width: 1001px) {
    font-size: 3rem;
    
 }
`

export const CheckoutButton = styled.button`
    color: black;
    height: 2rem;
    margin-top: .6rem;
    margin-left: 0;
    margin-right: 0;
    background-color: orange;
    border: none;
    border-radius: 4px;
    
    
    
   
`
export const TotalHeader = styled.h3`
    color: black;
    margin: 1rem;
    @media (min-width: 600px) and (max-width: 1000px){
        font-size: 1.7rem;
}
    @media (min-width: 1001px) {
    font-size: 2.2rem;
    
 }
`