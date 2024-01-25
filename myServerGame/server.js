const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("Der Server läuft auf port 3000");
  // spiel startet
  initGame();
  // spielschleife starten -
  // updateGame();
});

function initGame() {}
function updateGame() {}
