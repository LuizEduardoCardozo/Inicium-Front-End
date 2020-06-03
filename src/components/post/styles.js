import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Article = styled.article`
    border-radius: 10px 0;
    background-color: #dcdcdc;
    padding: 30px;
    margin-bottom: 15px;
    transition: all 500ms;
    h1 {
        font-weight: bold;
        color: #0011ff;
        transition: all 1s;
        &:hover {
            color: #0023aa;
            text-decoration: underline;
        }
    }

    p {
        margin: 5px 0px;
    }

    h3 {
        text-align: right;
        margin-top: 20px;
        font-size: 12px;
    }

    &:hover {
        cursor: pointer;
        background-color: #cbcbcb;
        box-shadow: 5px 5px 1px 1px #dcdcdc;


`;
