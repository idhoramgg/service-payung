const express = require('express');
const port = process.env.port || 3000;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');
const commentsRouter = require('./routes/Comments');

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

app.use(cors())
app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/api', commentsRouter);

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log(`Currently Connected to ${db._connectionString}`));


app.listen(port, () => console.log(`Our service is running on port ${port}`))