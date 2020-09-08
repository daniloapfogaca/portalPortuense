import React, { useState, useEffect } from 'react';
import api from '../../../../src/services/api';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { telMask, celMask, cpfMask } from '../../../components/Mascara/mask'
import { Redirect } from "react-router-dom";
import './styles.css';
const dateFormat = require('dateformat');

const Usuarios = (props) => {
    //parametros
    var search = props.location.search;
    var params = new URLSearchParams(search);
    var action = params.get('action');
    var usuarioIdparam = props.match.params.usuarioId;
    const usuarioId = localStorage.getItem('userId');

    const [redirect, setRedirect] = useState(false);
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dataNasc, setDatanasc] = useState('');
    const [genero, setGenero] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senhaForm, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [ativo, setAtivo] = useState(1);

    useEffect(() => {
        if (action === 'edit' && usuarioIdparam !== '') {
            api.get(`usuario/${usuarioIdparam}`).then(response => {
                setNome(response.data.nome);
                setSobrenome(response.data.sobrenome);
                setDatanasc(dateFormat(response.data.dataNasc, "dd/mm/yyyy"));
                setGenero(response.data.genero);
                setCpf(response.data.cpf);
                setEmail(response.data.email);
                setSenha(response.data.senha);
                setTelefone(response.data.telefone);
                setWhatsapp(response.data.whatsapp);
                response.data.ativo === 1 ? setAtivo(1) : setAtivo(0);
            });
        } else {
            return;
        }
    }, [usuarioIdparam]);

    function handleReset() {
        setRedirect(true);
    };

    async function handleStatus(e) {
        e.preventDefault();

        const data = {
            nome,
            sobrenome,
            dataNasc,
            email,
            senhaForm,
            telefone,
            whatsapp,
            cpf,
            genero,
            ativo,
        };

        if (action === 'edit') {
            try {
                const response = await api.put(`/usuario/${usuarioIdparam}`, data, {
                    headers: {
                        Authorization: 1,
                    }
                });
                alert(`Cadastro atualizado com sucesso.`);
                setRedirect(true);
            } catch (err) {
                alert('Erro na atualização, tente novamente.');
            }
        } else {
            if (action === 'novo') {

                try {
                    const response = await api.post('usuario', data, {
                        headers: {
                            Authorization: 1,
                        }
                    });
                    alert(`Feito o cadastro com Sucesso`);
                    setRedirect(true);
                } catch (err) {

                    alert('Erro no cadastro, tente novamente.');
                }
            }
        }
    }
    return (
        <div>
            <Header />
            <div id="usuarios">
                <div className="form-title">
                    <h1>Cadastro de Operador</h1>
                </div>
                {redirect && <Redirect to="/lista-usuario" />}
                <form onSubmit={handleStatus} onReset={handleReset} action="">
                    <div id="esquerda">
                        <div className="input-block">
                            <label for="nome">Nome</label>
                            <input id="txtNome" type="text" placeholder="Insira o Nome"
                                name="nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className="input-block">
                            <label for="sobrenome">Sobrenome</label>
                            <input id="txtSobrenome" type="text" placeholder="Insira o Sobrenome"
                                name="sobrenome"
                                value={sobrenome}
                                onChange={e => setSobrenome(e.target.value)} />
                        </div>
                        <div className="input-block">
                            <label for="dataNasc">Data de Nascimento</label>
                            <input id="txtDataNasc" type="date"
                                name="dataNasc"
                                value={dataNasc}
                                style={{ width: 273, height: 31 }}
                                onChange={e => setDatanasc(e.target.value)} />
                        </div>
                        <div className="input-block">
                            <label for="telefone">Telefone</label>
                            <input id="txtTelefone" type="text" placeholder="Insira o Telefone"
                                value={telefone}
                                name="telefone"
                                onChange={e => setTelefone(telMask(e.target.value))} />
                        </div>
                        <div className="input-block">
                            <label for="cpf">CPF</label>
                            <input id="txtCpf" type="text" placeholder="Insira o CPF"
                                value={cpf}
                                name="cpf"
                                onChange={e => setCpf(cpfMask(e.target.value))} />
                        </div>
                    </div>
                    <div id="direita">
                        <div className="input-block">
                            <label for="email">E-mail</label>
                            <input id="txtEmail" type="email" placeholder="Insira o Email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="input-block">
                            <label for="genero">Gênero</label>
                            <select id="txtGenero" type="select" placeholder="Informe o Gênero"
                                name="genero"
                                value={genero}
                                onChange={e => setGenero(e.target.value)}>
                                <option value={""} defaultValue>Selecione...</option>
                                <option value={"Masculino"} defaultValue>Masculino</option>
                                <option value={"Feminino"} defaultValue>Feminino</option>
                            </select>
                        </div>
                        <div className="input-block">
                            <label for="whatsapp">WhatsApp</label>
                            <input id="txtWhatsapp" type="text" placeholder="Insira o WhatsApp"
                                name="whatsapp"
                                value={whatsapp}
                                onChange={e => setWhatsapp(celMask(e.target.value))} />
                        </div>
                        <div className="input-block">
                            <label for="senha">Senha</label>
                            <input id="txtSenha" type="password" placeholder="Insira a Senha"
                                name="senhaForm"
                                value={senhaForm}
                                onChange={e => setSenha(e.target.value)} />
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