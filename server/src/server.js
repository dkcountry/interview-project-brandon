const constants = require("./App.constants");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authMiddleware = require("./authMiddleware");
const mongoose = require("mongoose");
+
mongoose.connect(constants.MONGODBADDRESS, { useNewUrlParser: true });
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get("/user", [authMiddleware], async (req, res) => {
  res.json({
    success: true,
    user: req.user
  });
});

app.get("/getStates", async (req, res) => {
  res.json({
    success: true,
    states: constants.STATES,
  })
})

app.post("/addUser", async (req, res) => {
  const UserSchema = new mongoose.Schema({
    states: [{value: String, label: String}],
  });
  let User;
  // Overwriting or resubmitting a location in the User variable:
  // Credit: https://stackoverflow.com/a/38143030
  try {
    User = mongoose.model('user-states');
  } catch (error) {
    User = mongoose.model('user-states', UserSchema);
  }
  const newUser = new User({
    states: req.body.states,
  })
  try {
    newUser.save();
  } catch (error) {
    console.error(`Error: Unable to save values ${req.body}`);
    console.error(`Error log: ${error}`);
  }
})

app.listen(5006, () => {
  console.log("server ready");
});
