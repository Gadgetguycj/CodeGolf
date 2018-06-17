// https://codegolf.stackexchange.com/questions/66202/product-over-a-range?rq=1
// Compute product and multiply the range (This includes both the starting and ending indexes)


//First Attempt
function range(s, e){
    let num=s;
    for(let i=e; i>s; i--){
        num *=i
    }
    return num
}

//Second Attempt (Top one compressed with arrow function, shorter variables, and a shorter for loop)
r=(s,e)=>{let n=s;for(;e>s;e--){n*=e}return n} 
    
console.log("First Program: "+range(-4,-1));
console.log("Second Program: "+r(-4,-1));