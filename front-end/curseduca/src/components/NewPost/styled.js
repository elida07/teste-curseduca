import styled from "styled-components";

export const DivNewPost = styled.div`
    background-color: #FFFF;
    border-radius: 10px;
    border: 1.5px solid gray;
    color: #545353;
    height: 42vh;
    margin: 20px 10px;

    display: grid;
`
export const DivInput = styled.div`
    display: grid;
    grid-template-columns: 4vw 1fr;
    height: 20vh;
    margin: 4vh 0;
    padding: 0 2vw;

    img {
        width: 3vw;
    }

    textarea {
            border: 1px solid #e0e0e0;
            height: 100%;
            width: 98%;
        }
`

export const DivButton = styled.div`
    border-top: 2px solid #f1f1f1;

    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    button {
        background-color: #2BBB3B;
        border-radius: 4px;
        cursor: pointer;
        color: #ffff;
        font-size: 98%;
        margin: 0 3vw;
        border: none;
        height: 80%;
        width: 10%;
        transition: all 0.1s ease-out 50ms;
        -webkit-transition: all 0.1s ease-out 50ms;
        -moz-transition: all 0.1s ease-out 50ms;
        -ms-transition: all 0.1s ease-out 50ms;
        -o-transition: all 0.1s ease-out 50ms;

        :hover {
            background-color: #27a333;
        }

        :active {
            transform: scale(0.8);
        }
    }
`