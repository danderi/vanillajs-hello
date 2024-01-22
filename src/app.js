/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function generarExcusa() {
  return (
    who[Math.floor(Math.random() * 3 + 1)] +
    " " +
    action[Math.floor(Math.random() * 3 + 1)] +
    " " +
    what[Math.floor(Math.random() * 2 + 1)] +
    " " +
    when[Math.floor(Math.random() * 4 + 1)]
  );
}

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generarExcusa();

  console.log("Hello Rigo from the console!");
};
