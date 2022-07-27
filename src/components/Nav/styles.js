import styled from 'styled-components';

export const StyledNav = styled.nav`
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;

    justify-content: space-between;

    align-items: center;

    margin-left: 60px;

    height: 50px;
    width: 40vw;
    min-width: 300px;

    div {
        display: inline-flex;
        flex-wrap: nowrap;

        h2 {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 30px;
        color: var(--grey4)
        }

        button + button {
            margin-left: 18px;
        }
    }

    @media(max-width: 1020px){
        margin-left: 20px;
    }

    @media(max-width: 810px){
        margin: 20px 0px 0px 0px;
        padding: 10px;

        div {

            h2 {
                font-size: 14px;
            }

            button + button {
                margin-left: 5px;
            }
        }
    }

    
`