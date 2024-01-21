const mongoose = require('mongoose');

const host = '127.0.0.1';
const port = '27017';
const database = 'task-manager-api';

const url = `mongodb://${host}:${port}/${database}`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})