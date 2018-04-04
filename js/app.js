/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

var cardNumber = 16 ; 
var cards = [];
var card = $('.card');
var openCards = [] , matchList = [];
var match , moves = 0 ; ;

for (var i = 0  ;  i < cardNumber;  i++) {
	cards.push($('#'+i.toString()).attr('class'));
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
var ShuffeldCards = shuffle(cards);
for (var j = 0 ; j< cardNumber ; j++) {
	$("#"+j.toString()).attr('class' , ShuffeldCards[j]);
}



function show(element){
	element.attr('class' , 'card show open');
    element.attr('class' , 'card show open selected');
    
}

function openList(element){


    openCards.push(element);
    if(openCards[1] != null){
        match = openCards[0].children().attr('class') == openCards[1].children().attr('class')
    }
    return openCards
}

function numOfMoves(){
    
    if(openCards[1] != null){
        if(match){
            $('.moves').html(String(moves));
        }
        else if(match == false) {
            moves += 1;
            $('.moves').html(String(moves));
        }
    }
}


function matched(elements){
    if(openCards[1] != null){
        if(match){
            elements[0].attr('class' , 'card match');
            elements[1].attr('class', 'card match');
            matchList.push(openCards)
            openCards = []
        }
        else 
            notMatched(elements)
    }
}

function notMatched(elements){
    
    setTimeout(function(){
        elements[0].attr('class' , 'card');
        elements[1].attr('class' , 'card');
        openCards = []
    } , 500)
}

function win(){
    setTimeout(function(){
        if(matchList.length == 8){
        alert("YOU WON! and your score was  "+ moves + " moves");
        }
    } ,300)
}

card.click(function(){
    if($(this).attr('class') == "card show open selected"){
        console.log("cant click here ");
    }
    else {
    show($(this));
    openList($(this));
    matched(openCards);
    numOfMoves();
    win();
    }


})



	
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
