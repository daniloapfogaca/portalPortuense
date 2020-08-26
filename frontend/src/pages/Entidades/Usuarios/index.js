import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import './styles.css';

const Usuarios = (props) => {
    return (
        <div>
            <Header />
            <div id="usuarios">
                <div className="form-title">
                    <h1>Cadastro de Operador</h1>
                </div>
                <form action="">
                    <div id="esquerda">
                        <div className="input-block">
                            <label for="nome">Nome</label>
                            <input id="nome" type="text" />
                        </div>
                        <div className="input-block">
                            <label for="sobrenome">Sobrenome</label>
                            <input id="sobrenome" type="text" />
                        </div>
                    </div>
                    <div id="direita">
                        <div className="input-block">
                            <label for="dataNasc">Data de Nascimento</label>
                            <input id="dataNasc" type="text" />
                        </div>
                        <div className="input-block">
                            <label for="email">E-mail</label>
                            <input id="email" type="email" />
                        </div>
                    </div>
                    <div className="buttons">
                        <button type="submit">Enviar</button>
                        <button type="reset">Cancelar</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
};

export default Usuarios;