//dependencies
var express = require('express');
// var bodyParser = require('body-parser');

//setup dev environment
if (process.env.NODE_ENV.trim() === "development"){
    require('dotenv').config(); //grab local copy of env vars
    dbSyncOptions.force = true;
}

//setup server
var port = process.env.PORT || 3000;
var app = express();

// Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname + '/client/build')));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

//start server
app.listen(port, function() {
     console.log("App listening on PORT " + port);
});

