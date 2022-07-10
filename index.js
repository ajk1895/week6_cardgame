console.log("hello")

/*  1) make deck of cards
    2)make 2 players
    3)shuffle deck
    4)deal cards
    5)play card
    6)give points
    7)repeat until no more cards
    8)compare points
    9)assign winner
*/


//4 suits with values of 1 to 13


let deckOfCards = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13];


class Player{
    constructor(name){
        this.name = name;
        this.point = 0;
        this.playerCards = [];
        
    };
    
    dealCards() { 
        for(let i = 0; i < deckOfCards.length; i++){
        let c = new Card(deckOfCards[i]);
        this.playerCards.push(c);
        }
    }
    
    shuffleDeck(){
        for (let i = this.playerCards.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1));
           [this.playerCards[i], this.playerCards[j]] = [this.playerCards[j], this.playerCards[i]];
        }
   }
   
   splitDeck(){
        this.playerCards.splice(0,26);
   }
   
   addPoint(){
    this.point += 1;
    
   }
}


// idk if it makes sense to do it this way...

class Card{
    constructor(card){
        this.card = card;
    }
}

class Board{
    constructor(){
        this.players = [];

    }

    start() {
        let selection = this.gameMenu();

        while(selection != 0){
            switch(selection){
                case '1':
                    this.gameStart();
                    break;
                default:
                    selection = 0;
            }
            selection = this.gameMenu();
        }

        alert('Refresh the page if you want to play again!')

     }

    gameMenu(){
        return prompt(`
        0) exit 
        1) Play WAR
        `);
    }


    
     
    
    gameStart(){
        
       //make the players
        let playerOne = new Player('player 1');
        let playerTwo = new Player('Player 2');
        
        //deal cards
        playerOne.dealCards();
        playerTwo.dealCards();

        //shuffle cards
        playerOne.shuffleDeck();
        playerTwo.shuffleDeck();


        //bring card count to 26
        // playerOne.splitDeck();
        // playerTwo.splitDeck();

        //start playing the game and adding points
       
        for(let i = 0; i < 26; i++) {
            let x = playerOne.playerCards[i];
            let y = playerTwo.playerCards[i];

           
           

            console.log(x);
            console.log(y);

            if(x > y){
                playerOne.addPoint();
            }else {
                playerTwo.addPoint();
            }

            alert(`round ${i + 1}: ${x} vs. ${y} \n${playerOne.point} to ${playerTwo.point}`);
            
    
        }

        //check points and declare winner
        alert(`final score: ${playerOne.point} to ${playerTwo.point}`);
        
        if(playerOne.point > playerTwo.point){
            alert('Congrats, you win!');
        }else if(playerOne.point === playerTwo.point){
            alert('Sorry, it looks like a tie.');
        }else{
            alert('Sorry, looks like I win this round.')
        }
        
    }
    
}


// //make the deck
// let gameDeck = new Deck();

// gameDeck.makeDeck();

// //shuffle deck
// //  gameDeck.shuffleDeck();

// console.log(gameDeck);

// let board = new Board();
// board.start();


