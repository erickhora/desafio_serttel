const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//mongodb senha: LsMcbsgG87nRg93e

//GET User
router.get('/', async (req, res) => {
    const users = await loadUserCollection();
    res.send(await users.find({}).toArray());
});

//POST User
router.post('/', async (req, res) => {
    const users = await loadUserCollection();
    await users.insertOne({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        telefones: {
            ddd: req.body.telefones.ddd,
            numero: req.body.telefones.numero
        }
    });
    res.status(201).send();
});

//DELETE User
router.delete('/:id', async (req, res) => {
    const users = await loadUserCollection();
    await users.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadUserCollection() {
    const client = await mongodb.MongoClient
        .connect('mongodb+srv://erickhora:LsMcbsgG87nRg93e@serttelbd-rgptb.mongodb.net/users?retryWrites=true&w=majority');

        return client.db('serttelbd').collection('users');
}

module.exports = router;
