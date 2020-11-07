const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000;
const cors = require("cors");
const keys = require("./config/keys");

app.use(bodyParser.json());
app.use(cors(keys.corsOptions));

app.get("/api/ping", (req, res) => {
  return res.json({ test: "pong" });
});

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
}

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server started on localhost port: ${PORT}`);
});
