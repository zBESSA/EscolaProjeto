import React, { Component } from "react";
import './CrudAluno.css';
import Main from "../templates/Main";

const title = "Cadastro de Alunos";

const Alunos= [
    { 'id': 1, 'ra': 11111, 'nome': 'André', 'codCurso': 21 },
    { 'id': 2, 'ra': 22222, 'nome': 'Giovanna', 'codCurso': 41 },
    { 'id': 3, 'ra': 33333, 'nome': 'Pedro', 'codCurso': 51 },
    { 'id': 4, 'ra': 44444, 'nome': 'Maria', 'codCurso': 33 },
]

export default class CrudAluno extends Component{
    renderTable(){
        return(
            <div className="listagem">
                <table className="listaAlunos" id="tblistaAlunos">
                    <thead>
                        <tr className="cabecTabela">
                            <th className="tabTituloRa">Ra</th>
                            <th className="tabTituloNome">Nome</th>
                            <th className="tabTituloCurso">Curso</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Alunos.map(
                            (aluno) =>
                            <tr>
                                <td>{aluno.ra}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.codCurso}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
    render(){
        return(
            <Main title={title}>
                {this.renderTable()}
            </Main>
        )
    }
}