import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    div {
        display: flex;
        justify-content: center;
        margin-left: 150px;

        button {
            width: 90px;
            height: 30px;
            margin: auto 15px auto 0;
        }

        

    }

`;

export const Input = styled.input`
    width: 60vw;
    height: 3rem;
    font-size: 2rem;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`;

export const TextArea = styled.textarea`
    width: 60vw;
    height: 70vh;
    font-size: 1.5rem;
    
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
`;
