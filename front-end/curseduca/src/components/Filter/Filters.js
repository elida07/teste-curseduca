import React from "react";
import { DivFilter, DivName, DivInputs, Button } from "./styled";

const Filters = () => {
    return (
        <DivFilter>
            <DivName>
                <h2>Filtros</h2>
            </DivName>
            <DivInputs>
                <p>Conteúdos</p>
                    <input placeholder={"Título do conteúdo"}/>
                <p>Tipo de Curso</p>
                    <select>
                        <option>Todos</option>
                    </select>
                <p>Instrutor</p>
                    <input placeholder={"Nome, email, ou CPF do instrutor"}/>
                <p>Membro</p>
                    <input placeholder={"Nome, email, ou CPF do membro"}/>
                <p>Data do comentário</p>
                <div>
                    <input placeholder={"Data do Comentário"} type={"date"}/>
                    <button>Filtrar</button>
                </div>
            </DivInputs>
            <Button>Limpar</Button>
        </DivFilter>
    )
};

export default Filters;