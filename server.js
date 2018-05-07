//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRoutes = require('./api/api.js');

//setup dev environment
if (process.env.NODE_ENV.trim() === "development"){
    require('dotenv').config(); //grab local copy of env var
}

//setup server
const port = process.env.PORT || 3001;
const app = express();

//Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

if (process.env.NODE_ENV === 'production') {
    console.log("PRODUCTION ENVIRONMENT")
    app.use(express.static(path.join(__dirname + '/client/build')));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

app.use("/api", apiRoutes);

//start server
app.listen(port, () => {
     console.log("App listening on PORT " + port);
});

