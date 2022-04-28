const express = require("express"); // get express module to get localhost server running
const morgan = require("morgan"); // get morgan module for logging server info

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

const layout = require("./views/layout");

app.get("/", (req, res) => {
  // set default homepage
  res.send(layout(""));
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
