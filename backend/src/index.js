const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://marco:marco@cluster0-dn7no.mongodb.net/devRadar', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, 
(error) => 
{
    if(error){
    console.log(error);
    }
    else{
        console.log("MongoDb connected");
    }
});

app.use(express.json());
app.use(routes);


// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
//Query Params: req.query (Filtros, ordenação, paginação, ...)
//Route Params: req.params (identifcar um recurso na alteração ou remoção)
//Body        : req.body (dados para criação ou alteração de um registro)

/*
app.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({message: 'Hello world'});

});

app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({message: 'Hello world'});

});

*/


app.listen(3333);