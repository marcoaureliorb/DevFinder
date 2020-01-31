const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Methods HTTP: GET, POST, PUT, DELETE

//type of parameters:
//Query Params: req.query (Filters, order, pagination, ...)
//Route Params: req.params (identify a feature in the change or removal)
//Body        : req.body (data to create or change a record)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs', DevController.update);
routes.delete('/devs', DevController.delete);

routes.get('/search', SearchController.index);

module.exports = routes;