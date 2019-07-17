const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const router = express.Router();

router.use(cors());

process.env.SECRET_KEY = 'secret';

router.post('/register', (req, res) => {
    const userData = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        telefones: {
            ddd: req.body.telefones.ddd,
            numero: req.body.telefones.numero
        }
    }

    User.findOne({
        email: req.body.email
    }).then(user => {
        if(!user) {
            bcrypt.hash(req.body.senha, 10, (err, hash) => {
                userData.senha = hash
                User.create(userData)
                    .then(user => {
                        console.log('************' + user);
                        res.json({
                            message: `Usuário registrado com sucesso: id: ${user._id}, dados: ${user}`,
                            user: user
                        })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            })
        } else {
            res.json({error: 'E-mail já existente'})
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.senha, user.senha)) {
                    const payload = {
                        _id: user._id,
                        nome: user.nome,
                        email: user.email,
                        telefones: [
                            {
                                ddd: user.telefones.ddd,
                                numero: user.telefones.numero
                            }
                        ]
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                } else {
                    res.json({ error: 'Usuário e/ou senha inválidos' })
                }
            } else {
                res.json({ error: 'Usuário e/ou senha inválidos' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})


router.get("/:id", (req, res, next) => {
  User.findOne({_id: req.params.id })
    .then(result => {
        res.json({
            user: result
        });
  }).catch(err => {
    res.json({ error: 'Não autorizado'})
  });
});


module.exports = router