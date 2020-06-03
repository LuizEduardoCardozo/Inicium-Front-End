import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fcfcfc;
    display: flex;
    flex-direction: column;
    border: 1px solid #333;
    width: 25vw;
    margin: 30px;
    padding: 30px;
    h1 {
        text-align: center;
    }
    div {
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
    }
`;
export const Input = styled.input`
    width: 20vw;
    height: 3rem;
    font-size: 2rem;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`;
export const Button = styled.button`
    width: 90px;
    height: 30px;
    margin-right: 15px;
`;
