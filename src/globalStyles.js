import styled, { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle` 
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        height: 100vh;
        background-color: rgb(0,24,25);
    }
`

export default globalStyles


export const App = styled.div` 
    height: 100vh;
    background-color: #282535;
    max-width: 400px;
    position: relative;
    margin: 0 auto;
    @media(max-width: 600px){
        max-width: 100%;
        margin: 0;
    }
`

export const ChatCom = styled.div`
    height: calc(100% - 106px);
`
export const Main = styled.div`
    background: red;
    padding: 15px;
    box-sizing: border-box;
    height: 100%;
    overflow-y: scroll;
    background-color: #282535;
    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-track {
        background: gray;
    }
    ::-webkit-scrollbar-thumb {
        background: yellow;
    }
`
export const Form = styled.form`
    width: 100%;
    height: ${({theme}) => theme.formHeight};
    display: flex;
    align-items: center;
    input{
        flex: 1;
        height: 100%;
        border: none;
        outline: none;
        background-color: #3A3A3A;
        color: #fff;
        font-size: 17px;
        padding: 0 10px;
    }
    button{
        font-size: 18px;
        padding: 0 20px;
        height: 100%;
        border: none;
        outline: none;
        background-color: #282753;
        color: #fff;
        cursor: pointer;
    }
`

export const SignIn = styled.div` 
position: absolute;
top: 40%;
left: 50%;
transform: translateX(-50%);
display: flex;
justify-content: center;
align-items: center;
padding: 12px 20px;
background-color: #fff;
color: #333;
font-size: 20px;
cursor: pointer;
`

export const Nav = styled.nav` 
    height: ${({theme}) => theme.navHeight};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    background-color: #181717;
`

export const NavBrand = styled.h4` 
    color: #fff;
    font-family: sans-serif;
    font-size: 19px;
`
export const Button  = styled.button` 
    color: #fff;
    background-color: #282C34;
    font-size: 17px;
    padding: 7px 15px;
    border: none;
    outline: none;
    cursor: pointer;
`