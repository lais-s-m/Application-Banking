import styled, {css} from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    border: 1px solid #E9ECEF;
    border-radius: 4px;

    padding: 22px;
    margin-top: 16px;
    
    width: 25vw;
    min-width: 300px;
`

export const RowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`

export const Title = styled.h3`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;

    ${(props)=> {
        switch(props.fontColor){
            case 'pink':
                return css`
                    color: #FD377E;
                `
            case 'black':
                return css`
                    color: #212529;
                `
            default: return false
            }
        }
    }
`

export const Text = styled.h5`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #343A40;
`

