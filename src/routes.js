
/**
 * Rotas / Recursos
 */
/**
 * Metodos HTTP :
 * 
 * GET   : Buscar uma informação do back-end  ( Select )
 * POST  : Criar uma informação no back-end   ( Insert )
 * PUT   : Alterar uma informação no back-end ( Update )
 * DELETE: Apagar uma informação no back-end  ( Delete )
 */

 /**
  * TIPOS DE PARAMETROS
  * 
  * Query        : Parâmetros nomeados e enviados na rota após o sinal de interrogação "?" ( filtros e paginação)
  * Route Params : Parâmetros utilizados para identificar um único recurso
  * Request Body : Corpo da requisiçã, utilizado para criar ou atualizar uma informação
  *           
  */

/**
 * Tipos de Bancos de DAdos
 * SQL : MySQL, SQLITE, Oracle ...
 * NoSQL : MongoDB, CouchDB e etc. ..
 */

const express = require('express'); //importa o módulo express
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//const connection = require('./database/connections'); // importa o arquivo de conexão

const routes = express.Router(); //importa o arquivo de rotas

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;