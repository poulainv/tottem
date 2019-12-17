import { createGlobalStyle } from 'styled-components'

export const GlobalCustomStyle = createGlobalStyle`
    
    .fade-enter {
        opacity: 0.1;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        overflow: hidden;
        transition: all 300ms ease-in-out;
    }

    .fade-exit {
        opacity: 1;
        overflow: hidden;
        
    }

    .fade-exit.fade-exit-active {
        opacity: 0.1;
        transition: all 300ms ease-in-out;
        
    }
`
