const express = require("express");
const app = express();

app.use(express.static("../GoLEdit/"));

app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1><p>lalala</p>");
});

app.get("/google", function (req, res) {
  res.redirect("https://google.com");
});

app.get("/search/:search", function (req, res) {
  const searchTerm = req.params.search;
  res.redirect("https://google.com/search?q=" + searchTerm);
});

app.get("/game", function (req, res) {
  res.redirect("game.html");
});

app.get("/*", function (req, res) {
  res.status(404).send("<p>Fehler 404: Gibts nicht vorhanden...</p>");
});

app.listen(3000, function () {
  console.log("Example is running on port 3000");
});
