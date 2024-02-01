const Grass = require("./classes/gras.js");
const Grazer = require("./classes/grazer.js");
const Predator = require("./classes/predator.js");
//const utils = require("./classes/utils.js");

let interValID;

/////////////////////////////////// Server Setup
const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("Der Server läuft auf port 3000");
  // spiel startet
  initGame();
  console.log(matrix);
  // spielschleife starten -
  interValID = setInterval(function () {
    updateGame();
  }, 1000);

});

/////////////////////// Spiellogik
matrix = [
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 1, 0, 3, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 2, 0],
  [1, 1, 0, 2, 0],
  [1, 1, 0, 0, 0]
];

grassArr = [];
grazerArr = [];
predatorArr = [];

function getRandMatrix(cols, rows) {
  let matrix = [];
  for (let y = 0; y <= rows; y++) {
    matrix.push([]);
    for (let x = 0; x <= cols; x++) {
      matrix[y][x] = Math.floor(Math.floor(Math.random() * 2));
    }
  }
  return matrix;
}

function addMoreCreatures() {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (y == x) {
        if (y % 2 == 0) matrix[y][x] = 3;
        else matrix[y][x] = 2;
      }
    }
  }
}

function initGame() {

  matrix =getRandMatrix(50,50);
  addMoreCreatures();

  // createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
  // background("#acacac");
  // frameRate(fr);

  // durch Matrix laufen und Lebewesen erstellen
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        let grassObj = new Grass(x, y);
        grassArr.push(grassObj);
      } else if (matrix[y][x] == 2) {
        let grazerObj = new Grazer(x, y);
        grazerArr.push(grazerObj);
      } else if (matrix[y][x] == 3) {
        let predatorObj = new Predator(x, y);
        predatorArr.push(predatorObj);
      }
    }
  }

}

function updateGame() {
  console.log('... update Game ...');

  for (let i = 0; i < grassArr.length; i++) {
    let grassObj = grassArr[i];
    grassObj.mul();
  }

  // for (let i = 0; i < grazerArr.length; i++) {
  //   let grazerObj = grazerArr[i];
  //   grazerObj.eat();
  //   grazerObj.mul();

  // }

  // for (let i = 0; i < predatorArr.length; i++) {
  //   let predatorObj = predatorArr[i];
  //   predatorObj.eat();
  //   predatorObj.mul();

  // }

  console.log(matrix);
}
