import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        :root {
            --white: white;
            --gray0: #dddddd;
            --gray1: #afafaf;
            --gray2: #808080;
            --gray3: #494949;
            --gray4: #252525;
            --black: black;

            --gray: --gray2;
        }
        font-family: 'Quicksand', sans-serif;
    }

    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* background-image: radial-gradient(farthest-corner at 50vw -200px, var(--gray0), var(--white) 60%); */
        background-color: var(--white);  
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

export default GlobalStyles;
