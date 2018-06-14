//https://codegolf.stackexchange.com/questions/166623/generate-a-deck-of-cards
//Generate a deck of cards and place into an array

let pos, run = 1;
let array = ["AC"];
for (let i = 1; i <= 4; i++) {
    //Suit
    let suit;
    if (i === 1) {
        suit = "C";
    } else if (i === 2) {
        suit = "D";
    } else if (i === 3) {
        suit = "H";
    } else if (i === 4) {
        suit = "S";
    }
    //Generate Number
    for (let i = 1; i <= 13; i++) {
        let num;
        if (i === 1) {
            num = "A";
        } else if (i === 13) {
            num = "K";
        } else if (i === 12) {
            num = "Q";
        } else if (i === 11) {
            num = "J";
        } else {
            num = i;
        }
        //Push Results into array
        array.push(num + suit);
    }
}
console.log(array);