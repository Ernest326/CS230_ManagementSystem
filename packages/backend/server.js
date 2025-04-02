const PORT = 3000;
const express = require('express');
const app = express();
const cors = require('cors');

const clientRouter = require('./routes/clientRouter.js');

app.use(cors({
    origin: 'http://localhost:5173',
}));

app.use('/clients', clientRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});