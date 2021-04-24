/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";
window.onload = function() {
  var positions = [],
    selectedCards = [],
    result = [],
    arrCardsNumbers = [],
    orderedArrayWithBubbleSort = [];
  var matches = document.querySelectorAll("#vCard .card");
  for (var i = 0, l = matches.length; i < l; i++)
    result.push(matches[i].outerHTML);

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
      deck.innerHTML = "";
      arrCardsNumbers = [];
      orderedArrayWithBubbleSort = [];
      selectedCards.map(function(input) {
        let expresion = 'data-indexnumber="([^"]+)"';
        let indexNumber = input.match(expresion);
        let regex = /\d+/g;
        let matches = parseInt(indexNumber[0].match(regex));
        arrCardsNumbers.push(matches);
      });
      orderedArrayWithBubbleSort = selectSort(arrCardsNumbers);

      for (let i = 0; i < orderedArrayWithBubbleSort.length; i++) {
        for (let j = 0; j < selectedCards.length; j++) {
          let expresion = 'data-indexnumber="([^"]+)"';
          let indexNumber = selectedCards[j].match(expresion);
          let regex = /\d+/g;
          let matches = parseInt(indexNumber[0].match(regex));
          if (matches == orderedArrayWithBubbleSort[i]) {
            deck.innerHTML += selectedCards[j];
            selectedCards.splice(j, 1);
          }
        }
      }
    }
  });
  var contains = function(needle) {
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

  const selectSort = arr => {
    let min = 0;
    while (min < arr.length - 1) {
      for (let i = min + 1; i < arr.length - 1; i++) {
        if (arr[min] > arr[i]) {
          let aux = arr[min];
          arr[min] = arr[i];
          arr[i] = aux;
        }
      }
      min++;
    }
    return arr;
  };
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
};
