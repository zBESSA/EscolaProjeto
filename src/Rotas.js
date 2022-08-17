import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./componentes/templates/Main";
import CrudAluno from "./componentes/CrudAluno/CrudAluno";

export default function Rotas(){
    return(
        <Routes>
            <Route exact path="/"
                element={
                    <Main title="Bem vindo!">
                        <div>Cadastro de alunos, cursos e carômetros</div>
                    </Main>
                }
            />
            <Route path="/alunos" element={<CrudAluno />} />

            <Route path="/cursos" element={
                <Main title="Cadastro de cursos">
                    <div>Página em construção</div>
                </Main> } />

            <Route path="/carometro" element={
            <Main title="Carômetro">
                <div>Página em construção</div>
            </Main> } />
        </Routes>
    )
}