const knex = require('knex'); //importa o knex
const configuration = require('../../knexfile'); //importa o arquivo de configuração do knex para criar a conexão com o DB

const connection = knex(configuration.development); // cria a conexão com o dB

module.exports = connection;