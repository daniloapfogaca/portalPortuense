import React from 'react';
import './styles.css';
import { FiSearch } from 'react-icons/fi'; //pacote feather icons dentro do react


import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import DataTableGenerica from '../../../components/DataTableGenerica';

const Categorias = (props) => {
    const data = [
        {
            categoria: 'Lanches',
            descricao: 'Lanches no pão de hámburguer',
        },
        {
            categoria: 'Almoco',
            descricao: 'Servico das 12h às 15h',
        }
    ];

    const columns = [
        {
            name: 'Categoria',
            selector: 'categoria',
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
            <p>Categorias</p>
        </div>
    )
};

export default Categorias;