const express = require("express");
<<<<<<< HEAD
const cors = require("cors");

=======
>>>>>>> 74fa18c695d5abf2f90a0e02fadc4845fecc1c24
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(cors());

app.use('login', (req,res) => {
  res.send({
    token: 'test'
  })
})
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
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
