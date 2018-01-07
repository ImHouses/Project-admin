/* SERVER FILE FOR BOTH ANGULAR APP AND API. */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

/* API file for interacting with MongoDB. */
const api = require('./server/routes/api');

/* Parsers. */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

/* Angular DIST output folder, this folder is used to redirect to our Angular app. */
app.use(express.static(path.join(__dirname, 'dist')));

/* API location. */
app.use('/api', api);

/* Send all other requests to the Angular app. */
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/* PORT setup. */
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));