import styled from "styled-components";

export const DivPosts = styled.div`
    background-color: #FFFF;
    border-radius: 10px;
    border: 1.5px solid gray;
    color: #545353;
    margin: 20px 10px;

    display: grid;
    row-gap: 8px;
`

export const ContainerPost = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 12vh;

    p {
        padding: 0 2vw;
    }
`

export const DivUser = styled.div`
    padding: 0 2vw;
    display: flex;
    align-items: center;
`
export const User = styled.p`
    font-weight: bold;
    font-size: 3vh;
`

export const Description = styled.p`
    color: #999999;
`

export const ImgLogo = styled.img`
    height: 10vh;
    margin-right: 8px;
`

export const DivButtons = styled.div`
    border-top: 2px solid #f1f1f1;
    border-bottom: 2px solid #f1f1f1;

    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40%;

    button {
        background-color: #2BBB3B;
        cursor: pointer;
        border-radius: 4px;
        color: #ffff;
        margin: 0 3vw;
        border: none;
        height: 50%;
        width: 60%;
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

    img {
            cursor: pointer;
            :active {
                transform: scale(0.8);
            }
        }
`