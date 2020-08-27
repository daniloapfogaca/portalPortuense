import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

import './styles.css';
import { FiSearch } from 'react-icons/fi'; //pacote feather icons dentro do react


import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import DataTableGenerica from '../../../components/DataTableGenerica';

const ListaProduto = (props) => {
    return (
        <div>
          <Header />
          <div id="lista-produto">
            <div className="table-filter">
                <div className="table-title">
                    <p>Produtos</p>
                </div>
                <div className="table-search">
                    <input type="text" placeholder="Encontre um produto"/>
                    <button><FiSearch size={18} color="#000000" /></button>
                </div>
            </div>
            <div className="table-container">
                
            </div>
          </div>
          <Footer />
        </div>
    )
};

export default ListaProduto;