const express = require('express');
let mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const bodyParser = require('body-parser');
const app = express();
const port = 3006;
app.use(cors());
app.use(bodyParser.json());
//Import Routes

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function () {
    console.log('connected');
});

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`));