const PORT = 3000;
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173',
}));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});