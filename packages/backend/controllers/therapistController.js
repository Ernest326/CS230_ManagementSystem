const db = require('../db');

exports.getTherapists = (req, res) => {
    console.log("getTherapists");
    db.query('SELECT * FROM therapists', (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(results);
    });
}

exports.getTherapistById = (req, res) => {
    console.log("getTherapistById");
    const { id } = req.params;
    db.query('SELECT * FROM therapists WHERE therapist_id = ?', [req.params.id], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Therapist not found' });
        }
        res.json(results[0]);
    });
}

exports.updateTherapist = (req, res) => {
    console.log("updateTherapist");
    const { id } = req.params;
    const { title, name, email, location, years, availability } = req.body;
    db.query('UPDATE therapists SET title = ?, name = ?, email = ?, location = ?, years = ?, availability = ? WHERE therapist_id = ?', [title, name, email, location, years, availability, id], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Therapist not found' });
        }
        res.json({ message: 'Therapist updated successfully' });
    });
}

exports.createTherapist = (req, res) => {
    console.log("createTherapist");
    console.log(req.body);
    const { title, name, email, location, years, availability } = req.body;
    db.query('INSERT INTO therapists (title, name, email, location, years, availability) VALUES (?, ?, ?, ?, ?, ?)', [title, name, email, location, years, availability], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(201).json({ id: results.insertId });
    });
}

exports.deleteTherapist = (req, res) => {
    console.log("deleteTherapist");
    const { id } = req.params;
    db.query('DELETE FROM therapists WHERE therapist_id = ?', [id], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Therapist not found' });
        }
        res.json({ message: 'Therapist deleted successfully' });
    });
}