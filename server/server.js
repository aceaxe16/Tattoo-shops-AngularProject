const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
const routes = require('./routes');


const port = 3000;
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);


app.get('/', (req, res) => {
    res.send('Hello from server!')
})

app.listen(port, () => {
    console.log(`listening on port ${port}.......`)
})