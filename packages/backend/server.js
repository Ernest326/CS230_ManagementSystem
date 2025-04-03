const PORT = 3000;
const express = require('express');
const app = express();
const cors = require('cors');

const clientRouter = require('./routes/clientRouter.js');
const therapistRouter = require('./routes/therapistRouter.js');
const sessionRouter = require('./routes/sessionRouter.js');

app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(express.json());

app.use('/clients', clientRouter);
app.use('/therapists', therapistRouter);
app.use('/sessions', require('./routes/sessionRouter.js'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});