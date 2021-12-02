import styled from "styled-components";

export const DivHeader = styled.header`
    background-color: #1E1E1E;
    display: grid;
`
export const DivName = styled.div`
    display: grid;
    place-content: center;

    h1 {
        margin: 1vh 0;
    }
`
export const DivMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 12px;
    width: 28%;

    p {
        margin: 0 0 2vh 0;
        cursor: pointer;

        :hover{
            color: #2BBB3B;
        }
    }
`
export const StyledP = styled.p`
    color: #2BBB3B;
    border-bottom: 2px solid #2BBB3B;
    padding-bottom: 2px;
`