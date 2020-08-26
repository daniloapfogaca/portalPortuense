import React from 'react';

import logoImg from '../../../assets/images/logo.svg';

import './styles.css';

const Logon = (props) => {
    return (
        <div className="container">
          <div className="grid-logon">
            <header id="showcase" className="box">
                <div className="bg-image" alt=""></div>
                <div className="content-wrap">
                  <img src={logoImg} alt="Portuense - Desde 1921" />
                </div>
            </header>

            <main id="main">
                <section id="section-a" className="box">
                    <div className="content-wrap">
                        <form action="" id="login">
                            <div className="input-block">
                                <label htmlFor="user">E-mail</label>
                                <input type="email" id="user" />
                            </div>

                            <div className="input-block">
                                <label htmlFor="password">Senha</label>
                                <input type="password" id="password" />
                            </div>
                            
                            <div className="button-container">
                                <button type="submit" className="btn">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
          </div>

          <fotter id="main-footer" className="grid">
            <div><a href="/esqueci-senha">Esqueci a senha</a></div>
            <div><a href="/user?action=novo">Cadastro</a></div>
          </fotter>
        </div>
    )
};

export default Logon;