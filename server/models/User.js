const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nome: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    telefones: [
        {
            ddd: {
                type: String
            },
            numero: {
                type: String
            }

        }
    ]
});

module.exports = User = mongoose.model('users', UserSchema);