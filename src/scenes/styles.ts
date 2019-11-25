import { createGlobalStyle } from 'styled-components'

export const GlobalCustomStyle = createGlobalStyle`
    
    .fade-enter {
        max-height: 0px;
        padding: 0px 48px 0px 48px;
        margin-bottom: 0px;
        opacity: 0.1;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        max-height:600px;
        padding: 16px 48px 16px 48px;
        margin-bottom: 48px;
        overflow: hidden;
        transition: all 400ms ease-in-out;
    }

    .fade-exit {
        opacity: 1;
        max-height:600px;
        padding: 16px 48px 16px 48px;
        margin-bottom: 48px;
        overflow: hidden;
        
    }

    .fade-exit.fade-exit-active {
        max-height: 0px;
        padding: 0px 48px 0px 48px;
        margin-bottom: 0px;
        opacity: 0.1;
        transition: all 400ms ease-in-out;
        
    }
`
