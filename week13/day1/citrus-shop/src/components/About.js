import React from 'react';
import { AboutDiv, MainDiv, FormDiv, AboutHeader, AboutParagraph, ContactHeader, FormButton, FormInput, FormTextArea, ImageHeader } from '../styled-components/About-style';


export default function About() {
    

    return (
        <MainDiv>
           
            <div>
            {/* <img src="https://images.unsplash.com/photo-1612483122117-0c6f30110083?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGNpdHJ1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" /> */}
            <ImageHeader></ImageHeader>
            {/* <img src="https://images.unsplash.com/photo-1590004829017-f30ef3c5faf1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGNpdHJ1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" /> */}
           
            </div>
            <AboutDiv>
            <AboutHeader>About Us</AboutHeader>
            <AboutParagraph>
              We are a family owned business established in 2003, located in the heart of 
              Tampa, Florida. It has been our mission to offer reasonably priced citrus
               tress to those in our community. Now thanks to the advances in technology and our amazing delivery 
               drivers we can now offer our quality trees around the country. So no matter which city you live in, 
               Citrus in the City will be happy to provide you with trees that will grow delicious fruit for you and your 
               loved ones for years to come.
            </AboutParagraph>
            </AboutDiv>
           
            <form>
                <FormDiv>
                <ContactHeader>Contact Us</ContactHeader>
                <FormInput type="text" placeholder="Name"/>
                <FormInput type="email" placeholder="Email" />
                <FormInput type="text" placeholder="Subject"/>
               <FormTextArea name="" id="" cols="30" rows="10" placeholder="Message"></FormTextArea>
               <FormButton type="submit">Submit</FormButton>
               </FormDiv>
            </form>

           
        </MainDiv>
    )
}
