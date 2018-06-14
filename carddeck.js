//Generate a deck of card into an array

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
    //Number
    for (let i = 1; i <= 13; i++) {
        let num;
        //Number
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
        array.push(num + suit);
    }
}
console.log(array);