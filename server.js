const express = require("express");
const cors = require("cors");
const session = require('express-session');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

// This is the original
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// This is an attempt at fixing based on this stack overflow post:
// https://stackoverflow.com/questions/50947450/deploy-to-heroku-uncaught-syntaxerror-unexpected-token
if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname, "/client/build/"));
  }

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chicagoboatingapp_db").catch(error => {
  console.log(error);
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});