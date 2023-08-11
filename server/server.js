const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();
const api = require('./routes/api')

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/api', api)


app.get('/', (req, res) => {
    res.send('Hello from server!')
})

app.listen(port, () => {
    console.log(`listening on port ${port}.......`)
})