import { createGlobalStyle } from "styled-components"

const globalStyles = createGlobalStyle`

    * {
        font-family: 'Arial', 'sans-serif';
        box-sizing: border-box;

        margin: 0;
        padding: 0;
    }

    body {
        height: 100dvh;
        width: 100%;
        background-color: #f7f9fc;
    }

    #root {
        height: 100%;
    }

    main {
        height: 100%;
    }

`;

export default globalStyles;
