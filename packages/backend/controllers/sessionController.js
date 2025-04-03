const db = require('../db');

exports.getSessions = (req, res) => {
    console.log("getSessions");
    db.query('SELECT * FROM sessions', (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(results);
    });
}

exports.getSessionById = (req, res) => {
    console.log("getSessionById");
    const { id } = req.params;
    db.query('SELECT * FROM sessions WHERE session_id = ?', [req.params.id], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Session not found' });
        }
        res.json(results[0]);
    });
}

exports.updateSession = (req, res) => {
    console.log("updateTherapist");
    const { id } = req.params;
    const { therapist_id, client_id, notes, session_date, length } = req.body;
    db.query('UPDATE sessions SET therapist_id = ?, client_id = ?, notes = ?, session_date = ?, length = ? WHERE session_id = ?', [therapist_id, client_id, notes, session_date, length, id], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Session not found' });
        }
        res.json({ message: 'Session updated successfully' });
    });
}

exports.createSession = (req, res) => {
    console.log("createSession");
    console.log(req.body);
    const { therapist_id, client_id, notes, session_date, length } = req.body;
    db.query('INSERT INTO sessions (therapist_id, client_id, notes, session_date, length) VALUES (?, ?, ?, ?, ?)', [therapist_id, client_id, notes, session_date, length], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(201).json({ id: results.insertId });
    });
}

exports.deleteSession = (req, res) => {
    console.log("deleteSession");
    const { id } = req.params;
    db.query('DELETE FROM sessions WHERE session_id = ?', [id], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Session not found' });
        }
        res.json({ message: 'Session deleted successfully' });
    });
}