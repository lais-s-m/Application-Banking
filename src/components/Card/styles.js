import styled, { css } from 'styled-components';

import { IoMdTrash } from 'react-icons/io';

export const Container = styled.div`
    display: inline-flex;
    justify-content: space-between;

    align-items: center;

    padding: 10px;

    background-color: var(--grey1);
    border-radius: 6px;

    margin: 20px 0px 0px 60px;

    height: 100px;
    width: 40vw;
    min-width: 300px;

    ${(props) => {
            switch(props.typeOfValue){
                case 'entrada':
                    return css`
                        border-left: 4px solid #03B898;
                    `
                case 'saída':
                    return css`
                        border-left: 4px solid #e63946;
                    `
                default: return false;
            }
        }

    }

    @media(max-width: 1020px){
        margin-left: 20px;
    }

    @media(max-width: 810px){
        margin: 20px 0px 0px 0px;
    }
`

export const DescriptionAndType = styled.div`
        display: inline-flex;
        flex-direction: column;

        margin-left: 13px;

        h2 {
            font-weight: 700;
            font-size: 20px;
            line-height: 30px;
            color: var(--grey4);

            margin-bottom: 10px;
        }

        p {
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: var(--grey3)
        }

`

export const ValueAndTrashIcon = styled.div`
    display: inline-flex;
    flex-direction: row;

    justify-content: space-between;

    margin-right: 13px;

    width: 100px;

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--grey4);
    }

    div {
        display: inline-flex;
        justify-content: center;
        align-items: center;

        background: var(--grey2);
        border-radius: 3px;
        transform: matrix(-1, 0, 0, 1, 0, 0);

        width: 22px;
        height: 22px;

        cursor: pointer;
        transition: 0.5s;

        &:hover {
            background-color: var(--grey4);
            transition: 0.5;
        }
    }
`

export const TrashIcon = styled(IoMdTrash)`
    transition: 0.5s;

    width: 15px;
    height: 15px;

    &:hover{
        color: var(--grey1);
        transition: 0.5s;
    }
`
