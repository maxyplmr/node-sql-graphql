const express = require('express');
const User = require('./src/db/models/user');

const app = express();

const PORT = 2999;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});