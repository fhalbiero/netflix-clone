import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #111;
        color: #FFF;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

`;