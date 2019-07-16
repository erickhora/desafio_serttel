const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const users = require('./routes/api/users');
const auth = require('./routes/api/auth');

app.use('/api/auth', auth);
app.use('/api/users', users);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));