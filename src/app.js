/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var result = [],
    matches = document.querySelectorAll("#vCard .card");
  for (var i = 0, l = matches.length; i < l; i++)
    result.push(matches[i].outerHTML);

  const inputCards = document.querySelector('input[name="cardsToDraw"]');
  var numberOfCards = inputCards.value || 0;
  inputCards.addEventListener("change", function(e) {
    numberOfCards = this.value;
  });
  let btnDraw = document.getElementById("btnDraw");
  let deck = document.getElementById("deck");
  btnDraw.addEventListener("click", function() {
    if (numberOfCards >= 0 && numberOfCards <= 52) {
      deck.innerHTML = "";
      for (let i = 0; i < numberOfCards; i++) {
        deck.innerHTML += result[Math.floor(Math.random() * result.length)];
      }
    }
  });
};
