const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = (req, res) => {
    mongodb.getDb().db().collection('users').find().toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json'); 
        res.status(200).json(users);
    }).catch((err) => {
        res.status(500).json({ message: err.message });
    });
};

const getSingle = (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json('É necessário um ID de usuário válido para a busca.');
    }   

    const userId = new ObjectId(req.params.id);
    mongodb.getDb().db().collection('users').find({ _id: userId }).toArray().then((users) => {
        if (users.length > 0) {
            res.setHeader('Content-Type', 'application/json'); 
            res.status(200).json(users[0]);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado.' });
        }
    }).catch((err) => {
        res.status(500).json({ message: err.message });
    });
};

module.exports = {
    getAll,
    getSingle
};