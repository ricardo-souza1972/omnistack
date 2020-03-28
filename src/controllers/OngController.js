
const crypto = require('crypto'); //importa o módulo de criptografia

const connection = require('../database/connections'); // importa o arquivo de conexão

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf } = request.body;   //( Recebe os dados passados como parâmetro pela página na requisição )
        const id = crypto.randomBytes(4).toString('HEX'); // Gera um número ramdomico de 4 digitos e o converte em texto


        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({id });

    }
}