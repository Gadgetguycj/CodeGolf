// https://codegolf.stackexchange.com/questions/166730/the-unique-padlock-pin-list
// In a private chat, a friend of mine apparently recently stumbled across a security system which has the following two restrictions on its valid pins:

// Each digit must be unique (that is "1" may only appear once)
// The order of the digits doesn't matter ("1234"="4321")
// So to illustrate how bad this padlock system is, let's actually enumerate all valid PINs!

console.log("start")

let ttlPins=0;
for (let i = 0; i <=9876; i++){

    let max = 10, valid=true;
    for (x = 0; x < i.toString().length; x++) {
        if (i.toString().charAt(x)< max) max = i.toString().charAt(x);
        else valid = false;
    }
    max=10;
    if (valid){
        console.log("Num: "+i);
        ttlPins++;
    } 
    valid=true;
}
console.log("Total Pins: "+ttlPins);


