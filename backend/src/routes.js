const express = require('express');
const connection = require('./database/connection');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        projeto: 'Portal Portuense',
        desenvolvedor: 'Jacqueline Teixeira'
    });
});

module.exports = routes;