/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var positions = [],
    result = [],
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
        let mf = Math.floor(Math.random() * result.length);
        deck.innerHTML += contains.call(positions, mf)
          ? positions.push(mf)
          : result[mf];
      }
    }
  });

  var contains = function(needle) {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;
    var indexOf;

    if (!findNaN && typeof Array.prototype.indexOf === "function") {
      indexOf = Array.prototype.indexOf;
    } else {
      indexOf = function(needle) {
        var i = -1,
          index = -1;

        for (i = 0; i < this.length; i++) {
          var item = this[i];

          if ((findNaN && item !== item) || item === needle) {
            index = i;
            break;
          }
        }

        return index;
      };
    }

    return indexOf.call(this, needle) > -1;
  };
};
