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
    const { id } = req.params;
    db.query('SELECT * FROM clients WHERE id = ?', [req.params.id], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.json(results[0]);
    });
}

exports.updateClient = (req, res) => {
    console.log("updateClient");
    const { id } = req.params;
    const { name, email, phone, regularity } = req.body;
    db.query('UPDATE clients SET name = ?, email = ?, phone = ?, regularity = ? WHERE client_id = ?', [name, email, phone, regularity, id], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.json({ message: 'Client updated successfully' });
    });
}

exports.createClient = (req, res) => {
    console.log("createClient");
    console.log(req.body);
    const { name, email, phone, regularity } = req.body;
    db.query('INSERT INTO clients (name, email, phone, regularity) VALUES (?, ?, ?, ?)', [name, email, phone, regularity], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(201).json({ id: results.insertId });
    });
}

exports.deleteClient = (req, res) => {
    console.log("deleteClient");
    const { id } = req.params;
    db.query('DELETE FROM clients WHERE client_id = ?', [id], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.json({ message: 'Client deleted successfully' });
    });
}