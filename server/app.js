const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

const mongoURI = 'mongodb+srv://erickhora:YxattRXVHVxNYBQK@serttelbd-rgptb.mongodb.net/users?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Conectado.'))
    .catch(err => console.log(err));

const Users = require('./routes/Users');

app.use('/users', Users);

app.listen(port, () => {
    console.log(`Servidor inicializado na porta ${port}`)
});