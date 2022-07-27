import styled, { css } from "styled-components";

const StyledButton = styled.button`
    display: inline-flex;

    justify-content: center;
    align-items: center;

    gap: 10px;

    border: 2px solid var(--colorPrimary);
    border-radius: 8px;

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

    ${(props) => {
        switch(props.buttonSize){
            case 'small':
                return css`

                    font-family: 'Nunito';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 19px;

                    padding: 15px;

                    width: 78px;
                    height: 40px;

                    @media (max-width: 400px){
                        font-size: 12px;

                        padding: 0px;

                        width: 65px;
                    }
                `
            default:
                return css`
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;

                    padding: 13px 20px;
                `
            }
        }
    }
`

export default StyledButton;