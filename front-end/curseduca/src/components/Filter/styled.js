import styled from "styled-components";

export const DivFilter = styled.div`
    background-color: #FFFF;
    border-radius: 10px;
    border: 1.5px solid gray;
    color: #545353;
    height: 80vh;
    margin: 20px 10px;

    display: grid;
    grid-template-rows: 8vh 1fr 4vh;
`
export const DivName = styled.div`
    border-bottom: 2px solid #f1f1f1;

    h2{
        padding: 0 2vw;
    }
`
export const DivInputs = styled.div`
    padding: 0 2vw;
    margin: 2vh 0;

    input{
        margin-bottom: 2vh;
        padding: 4px 8px;
        height: 4vh;
        border: 2px solid #f1f1f1;
        border-radius: 4px;
    }

    select{
        margin-bottom: 2vh;
        padding: 4px 8px;
        height: 4vh;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        color: #999999;
    }

    p{
        margin: 1vh 0;
    }

    div {
        display: flex;
        align-items: center;
        input {
            width: 70%;
            margin-right: 8px;
        }
        button {
            background-color: #dbd9d9;
            color: #545353;
            cursor: pointer;
            font-weight: bold;
            border-radius: 4px;
            margin-bottom: 2vh;
            border: none;
            height: 5vh;

            :active {
                transform: scale(0.8);
            }
        }
    }
`
export const Button = styled.button`
    background-color: #e5e5e5;
    color: #999999;
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    height: 5vh;
    width: 40%;
    margin: -20px 0 0 2vw;
    transition: all 0.1s ease-out 50ms;
    -webkit-transition: all 0.1s ease-out 50ms;
    -moz-transition: all 0.1s ease-out 50ms;
    -ms-transition: all 0.1s ease-out 50ms;
    -o-transition: all 0.1s ease-out 50ms;

    :active {
        transform: scale(0.8);
    }
`