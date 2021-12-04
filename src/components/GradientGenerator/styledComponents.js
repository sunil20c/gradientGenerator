// Style your elements here
import Styled from 'styled-components'

export const AppContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`
export const GenerateButton = Styled.button`
    background-color:#00c9b7;
    color:#014f7b;
    border:none;
    cursor:pointer;
    outline:none;
    font-family:"Roboto";
    padding:5px;
    border-radius:8px;
`

export const MainContainer = Styled.div`
    display:flex;
    flex-direction:column;

`
export const ButtonsList = Styled.ul`
        list-style:none;
        display:flex;
`
