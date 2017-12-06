"use strict";

var cards = [{ title: "let",
    description: "let can replace var"
}, { title: "function",
    description: "can be =>"
}];

function getRandomCard() {
    var max = cards.length;
    var min = 0;
    var index = Math.random() * (max - min) + min;
    return cards[Math.floor(index)];
}

function changeCard() {
    var card = getRandomCard();
    $("#title").text(card.title);
    $("#description").text(card.description);
    //get random card from array
    //set tittle of card to 
    //set description to 
}
$("#nextCard").on("click", changeCard);

changeCard();
