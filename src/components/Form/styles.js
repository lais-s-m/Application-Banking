import styled from 'styled-components';

export const StyledForm = styled.form`
    display: inline-flex;
    flex-direction: column;

    width: 25vw;
    min-width: 300px;

    padding: 25px;

    border: 1px solid var(--grey2);
    border-radius: 4px;

    section {
        display: inline-flex;
        flex-direction: row;
        justify-content: space-between;

        section {
            display: inline-flex;
            flex-direction: column;
        }
    }

    button {
        margin-top: 20px;
    }


`