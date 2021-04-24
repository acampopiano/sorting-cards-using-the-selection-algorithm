/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";
//import { bubbleSort } from "./bubbleSort.js";

function bubble(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      var a = arr[i];
      var b = arr[i + 1];
      arr[i] = b;
      arr[i + 1] = a;
    }
  }
  return arr;
}
window.onload = function() {
  var positions = [],
    selectedCards = [],
    result = [],
    matches = document.querySelectorAll("#vCard .card");
  for (var i = 0, l = matches.length; i < l; i++)
    result.push(matches[i].outerHTML);

  //result = result.sort(() => Math.floor(Math.random() * result.length));
  //shuffle(result);
  const inputCards = document.querySelector('input[name="cardsToDraw"]');
  var numberOfCards = inputCards.value || 0;
  inputCards.addEventListener("change", function(e) {
    numberOfCards = this.value;
  });
  let btnDraw = document.getElementById("btnDraw");
  let btnSort = document.getElementById("btnSort");
  let deck = document.getElementById("deck");
  btnDraw.addEventListener("click", function() {
    if (numberOfCards >= 0 && numberOfCards <= 52) {
      deck.innerHTML = "";
      positions, (selectedCards = []);
      for (let i = 0; i < numberOfCards; i++) {
        let mf = Math.floor(Math.random() * result.length);
        if (!contains.call(positions, mf)) {
          deck.innerHTML += result[mf];
          positions.push(mf);
          selectedCards.push(result[mf]);
        } else --i;
      }
    }
  });
  btnSort.addEventListener("click", function() {
    if (selectedCards.length) {
      let arrCards = [];
      selectedCards.map(function(input) {
        let expresion = 'data-indexnumber="([^"]+)"';
        let indexNumber = input.match(expresion);
        var regex = /\d+/g;
        var matches = indexNumber[0].match(regex);
        arrCards.push(matches);
      });
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
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
};
