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

    div {

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

    
`