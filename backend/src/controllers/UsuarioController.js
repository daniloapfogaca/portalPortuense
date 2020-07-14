const connection = require('../database/connection');
const getPassword = require('../utils/getPassword');
const getDate = require('../utils/getDate');

module.exports = {
    async create(request, response) {
        const {
            nome,
            sobrenome,
            dataNasc,
            email,
            senhaForm,
            telefone,
            whatsaap,
            cpf,
            genero,
            ativo
        } = request.body;

        const senha = getPassword(senhaForm); 
        const dataUltModif = getDate(); 

        const [id] = await connection('usuario').insert({
            nome,
            sobrenome,
            dataNasc,
            email,
            senha,
            telefone,
            whatsaap,
            cpf,
            genero,
            ativo,
            data,
            dataUltModif
        });

        return response.json({ id, email });
    },
};