const express = require('express');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes.js');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.use('/api/feedback', feedbackRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});