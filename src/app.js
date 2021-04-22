/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var result = [],
    matches = document.querySelectorAll("#vCard .card");
  for (var i = 0, l = matches.length; i < l; i++)
    result.push(matches[i].outerHTML);

  let btn = document.getElementById("deck");

  btn.addEventListener("click", function() {
    document.getElementById("deck").innerHTML =
      result[Math.floor(Math.random() * result.length)];
  });
};
