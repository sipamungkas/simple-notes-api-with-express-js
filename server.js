const express = require('express');
const bodyParser = require('body-parser');
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


// create express app
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse request of content-type - application/json
app.use(bodyParser.json())

// define simple route
app.get('/', (req, res) => {
    res.json({
        "message": "Welcome to Notes Application. Take Notes quickly. Organize and keep track of all your notes."
    })
});
// routes Notes
require('./app/routes/note.routes')(app);

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});