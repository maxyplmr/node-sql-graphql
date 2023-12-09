const express = require('express');
const app = express();

const User = require('./src/routes/user');

app.use(User);

const PORT = 2999;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${ PORT }`);
});