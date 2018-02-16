var badGuy = {
    health: 100,
    el: document.querySelector("#enemy")
  }
var handDivs = [
    document.querySelector("#hand1"),
    document.querySelector("#hand2")
];

var hands = [
    [ "a", "a", "c", "d" ],
    [ "b", "f", "d", "c" ]
]
  
  function showHands() {
    hands.forEach((hand, player) => {

        handDivs[player].innerHTML = "";

      hand.forEach((card, ind) => {
        var newCard = document.createElement("div");
        
        newCard.innerHTML = card;
        newCard.classList.add("card");
        newCard.setAttribute("player", player);
        newCard.setAttribute("val", card);
        newCard.setAttribute("ind", ind);
        newCard.addEventListener("click", playCard);
        
        handDivs[player].appendChild(newCard);
      })
    })
  }
  
  showHands();
  updateBeatnik();
  
  function playCard(event) {
    // get the card info
    var player = Number(event.target.getAttribute("player"));
    var cardInfo = event.target.getAttribute("val");
    var cardIndex = Number(event.target.getAttribute('ind'));

    //execute the instruction
    badGuy.health --;
    
    //figure out who to pass to
    var otherPlayer = (player+1) % 2;

    //transfer card to other player
    hands[otherPlayer].push( hands[player].splice(cardIndex,1) );

    //re-show the hands
    showHands();

    //show dammage
    updateBeatnik();
  }

  function updateBeatnik() {
    badGuy.el.querySelector(".hp").innerHTML = badGuy.health;
  }