import styled, { css } from "styled-components";

const Button = styled.button`
    align-items: center;

    padding: 13px 20px;
    gap: 10px;

    border: 2px solid var(--colorPrimary);
    border-radius: 8px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #ffff;

    transition: 0.5s;

    &:hover{
        transition: 0.5s;
    }

    ${(props) => {
        switch(props.backgroundColor){
            case 'pink':
                return css`
                    background-color: var(--colorPrimary);

                    &:hover{
                        background-color: var(--colorPrimary2);
                    }
                `
            case 'grey-pink':
                return css`
                    background-color: var(--grey2);
                    color: var(--grey3);
                    border: 1.4px solid var(--grey2);

                    &:hover, &:focus {
                        background-color: var(--colorPrimary);
                        color: #ffff;
                    }
                `
            default:
                return css`
                    background-color: var(--grey2);
                    color: var(--grey3);
                    border: 1.4px solid var(--grey2);

                    &:hover{
                        background-color: var(--grey3);
                        color: var(--grey1);

                    }
                `
            }
        }
    }

`

export default Button;