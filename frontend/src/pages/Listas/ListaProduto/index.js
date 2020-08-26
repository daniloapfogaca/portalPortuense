import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

import './styles.css';
import { FiSearch } from 'react-icons/fi'; //pacote feather icons dentro do react


import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import DataTableGenerica from '../../../components/DataTableGenerica';

const ListaProduto = (props) => {

    const data = [
      {
        nomeCategoria: 'Lanches',
        descricao: 'Lanches em pão de forma'
      },
    ];

    const columns = [
        {
            name: 'Categoria',
            selector: 'nomeCategoria',
            sortable: true,
        },
        {
            name: 'Descrição',
            selector: 'descricao',
            sortable: true,
            left: true,

        },
    ];

    return (
        <div>
          <Header />
          <div id="categorias">
            <div className="table-filter">
                <div className="table-title">
                    <p>Categorias</p>
                </div>
                <div className="table-search">
                    <input type="text" placeholder="Encontre uma categoria"/>
                    <button><FiSearch size={18} color="#000000" /></button>
                </div>
            </div>
            <DataTableGenerica
                data={data}
                columns={columns}
            />
          </div>
          <Footer />
        </div>
    )
};

export default ListaProduto;