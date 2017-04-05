/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

var ibmdb = require('ibm_db')
global.dbConnString = "insert your connection string";

// start server on the specified port and binding host
app.get('/getData', function(req, res) {
    ibmdb.open(dbConnString, function(err, conn) {
        if (err) {
            console.log("Error", err);
        } else {
            var query = "SELECT * FROM IBL";
            conn.query(query, function(err, rows) {
                if (err) {
                    console.log("Error", err);
                    return;
                } else {
                    console.log(rows);
                    res.send(rows);
                    conn.close(function() {
                        console.log("Connection closed successfully");
                    });
                }
            });
        }
    })
});
