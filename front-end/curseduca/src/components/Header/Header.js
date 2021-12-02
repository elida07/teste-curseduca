import React from "react";
import { DivHeader, DivName, DivMenu, StyledP } from "./styled"

const Header = () => {
    return (
        <DivHeader>
            <DivName>
                <h1>CURSEDUCA</h1>
            </DivName>
            <DivMenu>
                <p>Conteúdos</p>
                <StyledP>Comunidade</StyledP>
                <p>Planos</p>
                <p>Trilhas</p>
            </DivMenu>
        </DivHeader>
    )
};

export default Header;