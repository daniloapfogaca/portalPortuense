const connection = require('../database/connection');
const getDate = require('../utils/getDate');

module.exports = {
    async index(request, response) {
        const pedidos = await connection('pedido').select('*');

        return response.json(pedidos);
    },

    async indexById (request, response) {
        const { pedidoId }  = request.params;

        const pedido = await connection('pedido')
            .where('id', pedidoId)
            .select('*')
            .first();
    
        return response.json(pedido);
    },
    
    async create(request, response) {
        const usuarioId  = requesßt.headers.authorization;
        const dataPedido = getDate(); 
        const dataUltModif = getDate(); 

        const {
            total,
            clienteId
        } = request.body;

        const [id] = await connection('pedido').insert({
            total,
            clienteId,
            dataPedido,
            usuarioId,
            dataUltModif
        });

        return response.json({ id, nomepedido });
    },

    async update(request, response) {
        const { pedidoId } = request.params;
        const  usuarioId  = request.headers.authorization;
        const dataUltModif = getDate(); 

        const {
            nomepedido,
            descricao            
        } = request.body;

        await connection('pedido').where('id', pedidoId).update({
            nomepedido,
            descricao,
            usuarioId,
            dataUltModif
        });

        return response.status(204).send();
    },
};