import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        font-family: 'Roboto';
    }

    body{
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center;

        color: #fff;
        background: linear-gradient(to right, #67b26f, #4ca2cd)
    }

    :root{
        --bg-button: #f0f0f0;
        --border-button: solid 1px #888;
    }
`;
