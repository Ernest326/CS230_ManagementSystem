const db = require('../db');

exports.getClients = (req, res) => {
    console.log("getClients");
    db.query('SELECT * FROM clients', (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(results);
    });
}
exports.getClientById = (req, res) => {
    console.log("getClientById");
}
exports.updateClient = (req, res) => {
    console.log("updateClient");
}

exports.createClient = (req, res) => {
    console.log("createClient");
}

exports.deleteClient = (req, res) => {
    console.log("deleteClient");
}