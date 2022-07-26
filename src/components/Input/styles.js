import styled from 'styled-components';

import CurrencyInput from 'react-currency-masked-input'; 

export const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
`
export const StyledInput = styled.input`
    background-color: var(--grey1);

    padding: 10px 16px;
    gap: 10px;

    border: 2px solid var(--grey1);
    border-radius: 8px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: var(--grey3);
`

export const ContainerInput = styled.div`
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: var(--grey1);

    padding: 10px 16px;
    gap: 10px;

    border: 2px solid var(--grey1);
    border-radius: 8px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: var(--grey4);

    width: 8vw;
    min-width: 110px;
    height: 50px;

    select {
        border: 0;
        background-color: var(--grey1);
        color: #343A40;

        width: 8vw;
        min-width: 85px;
        
    }
`

export const StyledCurrencyInput = styled(CurrencyInput)`
    border: 0;
    background-color: var(--grey1);

    width: 5vw;
    min-width: 50px;

    color: var(--grey3);

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
`

export const Label = styled.label`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--grey4);

    margin-bottom: 8px;
`

export const Example = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: var(--grey3);

    margin-bottom: 12px;
`

export const MsgError = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 20px;
    color: var(--colorPrimary);

`