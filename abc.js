//https://codegolf.stackexchange.com/questions/110219/as-easy-as-a-b-c
//Find the missing characters


let input = ""
let abc = ""

if (input.indexOf("A") == -1) abc += "A"
if (input.indexOf("B") == -1) abc += "B"
if (input.indexOf("C") == -1) abc += "C"


console.log(abc)