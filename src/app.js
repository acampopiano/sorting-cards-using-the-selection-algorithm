/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";
//import { bubbleSort } from "./bubbleSort.js";

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
      let arrCardsNumbers,
        orderedCards = [];
      selectedCards.map(function(input) {
        let expresion = 'data-indexnumber="([^"]+)"';
        let indexNumber = input.match(expresion);
        var regex = /\d+/g;
        var matches = parseInt(indexNumber[0].match(regex));
        arrCardsNumbers.push(matches);
      });
      let orderedArrayWithBubbleSort = bubbleSort(arrCardsNumbers);
      for (let i = 0; i < orderedArrayWithBubbleSort.length; i++) {
        for (let j = 0; j < selectedCards.length; j++) {
          let expresion = 'data-indexnumber="([^"]+)"';
          let indexNumber = selectedCards[j].match(expresion);
          var regex = /\d+/g;
          var matches = parseInt(indexNumber[0].match(regex));
          if (matches === orderedArrayWithBubbleSort[i]) {
            orderedCards.push(selectedCards[j]);
          }
        }
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

  const bubbleSort = arr => {
    let wall = arr.length - 1; //iniciamos el wall o muro al final del array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
        if (arr[index] > arr[index + 1]) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        index++;
      }
      wall--; //disminuir la pared para optimizar
    }
    return arr;
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
