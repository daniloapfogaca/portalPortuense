import React, { useState }  from 'react';
import { FiBell, FiSearch, FiChevronDown } from 'react-icons/fi'; //pacote feather icons dentro do react
import './styles.css';
import { Container } from 'reactstrap';
import ClickAwayListener from 'react-click-away-listener';

const Header = (props) => {
    const [produtosOpen, setProdutosOpen] = useState(false);
    const [usuariosOpen, setUsuariosOpen] = useState(false);
    const [relatoriosOpen, setRelatoriosOpen] = useState(false);

    // function handleButtonClick() {
    //   if ( open === true ) {
    //     setOpen(false);
    //   } else {
    //     setOpen(true);
    //   };
    // }

    function handleProdutosClick() {
      if ( produtosOpen === true ) {
        setProdutosOpen(false);
      } else {
        setProdutosOpen(true);
        setUsuariosOpen(false);
        setRelatoriosOpen(false);
      };
    }

    function handleUsuariosClick() {
      if ( usuariosOpen === true ) {
        setUsuariosOpen(false);
      } else {
        setUsuariosOpen(true);
        setProdutosOpen(false);
        setRelatoriosOpen(false);
      };
    }

    function handleRelatoriosClick() {
      if ( relatoriosOpen === true ) {
        setRelatoriosOpen(false);
      } else {
        setRelatoriosOpen(true);
        setUsuariosOpen(false);
        setProdutosOpen(false);
      };
    }

    function handleClickOutside() {
      setRelatoriosOpen(false);
      setUsuariosOpen(false);
      setProdutosOpen(false);
    }

    return (
        <header>
            <div>
              <div className="search-wrapper">
                    <div className="search">
                      <input type="text"/>
                      <button><FiSearch size={18} color="#000000" /></button>
                    </div>
                    <div className="notifications">
                          <FiBell className="bell" size={28} color="#f8f3ed" />
                        <span>3</span>
                    </div>
              </div>
              <div className="menu-wrapper">
                <ClickAwayListener onClickAway={handleClickOutside}>
                  <ul className="menu-bar">
                    <li className="nav-item">
                      <a className="nav-link" onClick={handleProdutosClick} href="#">Produtos</a>
                      <FiChevronDown className="icon" size={14} color="#707070" />
                      <div className={produtosOpen === true ? "produtos-show" : "produtos-hidden"}>
                        <ul>
                          <li><a className="dropdown-item" href="/lista-produto">Lista de Produtos</a></li>
                          <li><a className="dropdown-item" href="/lista-categoria">Lista de Categorias</a></li>
                          <li><a className="dropdown-item" href="/lista-unidade">Lista de Unidades</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" onClick={handleUsuariosClick} href="#">Usuários</a>
                      <FiChevronDown className="icon" size={14} color="#707070" />
                      <div className={usuariosOpen === true ? "usuarios-show" : "usuarios-hidden"}>
                        <ul className="submenu">
                          <li><a href="/lista-usuario">Lista de Usuários</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" onClick={handleRelatoriosClick} href="#">Relatórios</a>
                      <FiChevronDown className="icon" size={14} color="#707070" />
                      <div className={relatoriosOpen === true ? "relatorios-show" : "relatorios-hidden"}>
                        <ul className="submenu">
                          <li><a href="/rel-produtos-categoria">Produtos por Categoria</a></li>
                          <li><a href="/rel-compras-por-produto">Compras por Produto</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </ClickAwayListener>
              </div>
            </div>
        </header>
    )
};

export default Header;