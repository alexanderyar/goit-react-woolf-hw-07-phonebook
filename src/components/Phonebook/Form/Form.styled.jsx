import styled from 'styled-components'
import { Form, Field } from 'formik';


export const ButtonStyled = styled.button`

display:block;
margin-left:auto;
margin-right:auto;
margin-top: 25px;

font-size:20px;
position: relative;
  padding: 5px 64px;
  border-radius: 100vw;
  background-color: transparent;
  font-family: 'Playfair Display', serif;
  color: #fafafa;
  border: solid 1px rgba($color: #fafafa, $alpha: 0.3);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1); // easeOutQuart
  -webkit-mask-image: -webkit-radial-gradient(white, black); // force safari to respect border radius
`
    

export const FormStyled = styled(Form)`
border: 1px solid black;
padding: 10px;
background: rgb(9,10,121);
background: linear-gradient(90deg, rgba(9,10,121,0.8505996148459384) 8%, rgba(2,0,36,1) 47%, rgba(255,164,0,1) 100%);
color:white;
`

export const Input = styled(Field)`
margin-right:15px;

font-size:18;
font-weight:700;
color:black;
`



// padding-left: 15px; 
// padding-right: 15px;
// background-color: violet;