import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Categorias from './pages/Categorias';
import Dashboard from './pages/Dashboard';
import Logon from './pages/Logon';
import Produtos from './pages/Produtos';
import Usuarios from './pages/Usuarios';


const Routes = (props) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route component={Logon} path="/" exact />
                <Route component={Categorias} path="/categorias" exact />
                <Route component={Categorias} path="/categorias/:categoriaId" />
                <Route component={Dashboard} path="/dashboard" />
                <Route component={Produtos} path="/produtos" exact />
                <Route component={Produtos} path="/produtos/:produtoId" />
                <Route component={Usuarios} path="/usuarios" exact />                
                <Route component={Usuarios} path="/usuarios/:usuarioId" />                
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;