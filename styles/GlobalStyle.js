import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root {
        --colorPrimary: #FD377E;
        --colorPrimary2: #E34981;
        --colorSecondary: #03B898;
        --grey4: #212529;
        --grey3: #868E96;
        --grey2: #e9ecef;
        --grey1: #f8f9fa;
    }

    ul, ol {
        list-style: none;
    }

    body {
        font-family: 'Nunito', sans-serif;
        font-style: normal;
    }

    button {
        cursor: pointer;
    }

`

export const LaunchpageContainer = styled.div`
    display: inline-flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100vw;

    padding: 20vh 22vw 20vh 22vw;

    background-color: var(--grey4);

    div {
        display: inline-flex;
        flex-direction: column;

        width: 25vw;

        margin-right: 50px;

        h2 {
            
            font-weight: 800;
            font-size: 38px;
            line-height: 48px;
            color: #ffff;

            margin-top: 50px;
        }

        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            color: #ffff;

            margin: 30px 0px 30px 0px;
        }
    }

`

export const HomeContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    
    margin: 50px 10vw 50px 10vw;

    @media(max-width: 1020px){
        margin: 30px 2vw 30px 2vw;
        
    }

    @media(max-width: 810px){
        flex-direction: column;

        justify-content: center;
        align-items: center;

        width: 100vw;

        margin: 30px 2vw 30px 2vw;
    }
`

export const ColumnContainer = styled.div`
    display: inline-flex;
    flex-direction: column;

    align-items: center;
`