
import { createGlobalStyle } from "styled-components"

const globalStyles = createGlobalStyle`

    * {
        font-family: 'Arial', 'sans-serif';
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        min-height: 100vh;
        width: 100%;
        background-color: #f7f9fc;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    main {
        width: 100%;
    }

`;

export default globalStyles;
