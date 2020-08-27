import React from 'react';
import './styles.css';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Unidades = (props) => {
    return (
        <div>
            <Header />
            <div id="unidades">
                <div className="form-title">
                    <h1>Cadastro de Unidades</h1>
                </div>
                <form action="">
                    <div id="esquerda">
                        <div className="input-block">
                            <label for="nome">Nome</label>
                            <input id="nome" type="text" />
                        </div>
                        
                    </div>
                    <div id="direita">
                        <div className="input-block">
                            <label for="descricao">Descricao</label>
                            <input id="descricao" type="text" />
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

export default Unidades;