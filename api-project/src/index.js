const express = require('express');

// DB Connection
require('./db/dbconnection')

const app = express();

app.listen(3000, () => {
    console.log('Server running... http://localhost:3000');
})

