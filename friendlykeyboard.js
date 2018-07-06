// https://codegolf.stackexchange.com/questions/50047/generate-keyboard-friendly-numbers
//Generate numbers which digits are next to eachother on keyboard

//Attempt 1
keyboard = (n) => {
    let result = []
    //Run through numbers
    for (let term = 1; result.length <= n; term++) {
        if (term / 9 > 1) {
            let length = term.toString().length
            //Run through digits
            for (let pos = 0; pos <= length; pos++) {
                let firstChar = term.toString().charCodeAt(pos);
                let secondChar = term.toString().charCodeAt(pos+1);
                if (firstChar == 48)
                    firstChar = 58

                if (secondChar == 48)
                    secondChar = 58
                 
             //Check how close char is
                if (firstChar !== secondChar && firstChar !== secondChar + 1 && firstChar !== secondChar - 1)
                    break;
                else if (pos === length - 2)
                    result.push(term)

            }
        } else
            result.push(term)
    }
    return result[n-1]
}

console.log("FIRST ATTEMPT: "+keyboard(200));


k=a=>{let b=[];for(let c=1;b.length<a;c++)if(9<c){let d=c.toString().length;for(let e=0;e<=d;e++){let f=c.toString().charCodeAt(e),g=c.toString().charCodeAt(e+1);if(48==f&&(f=58),48==g&&(g=58),f!==g&&f!==g+1&&f!==g-1)break;else e===d-2&&b.push(c)}}else b.push(c);return b[a-1]}
console.log("SECOND ATTEMPT: "+k(200));