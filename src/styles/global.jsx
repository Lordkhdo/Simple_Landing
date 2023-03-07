import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    html,body,#root{
        height: 100vh;
    }
    body{
        background-color: #F8FDFF;
        overflow: hidden;
    }
    button{
        background-color: none;
        outline: none;
        border: none;
    }

    a{
        text-decoration: none;
        outline: none;
    }
    
    
    :root{
        --width-container:1100px
    }
    
    `;
