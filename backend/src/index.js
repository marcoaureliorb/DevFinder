const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://marco:marco@cluster0-dn7no.mongodb.net/devRadar', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
},
    (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("MongoDb connected");
        }
    });

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);