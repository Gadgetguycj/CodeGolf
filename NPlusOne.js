//Introduction
//OEIS sequence A127421 is the sequence of numbers whose decimal expansion is a concatenation of 2 consecutive increasing non-negative numbers. Put simply, every number in the sequence is formed by putting together n with n+1 for some non-negative, integer value of n. The first several terms are:
//
//1, 12, 23, 34, 45, 56, 67, 78, 89, 910, 1011, 1112, 1213, 1314, 1415, 1516, 1617, 1718, 1819, 1920, 2021, 2122, 2223, 2324, 2425, 2526, 2627, 2728, 2829, 2930, 3031, 3132, 3233, 3334, 3435, 3536, 3637, 3738, 3839, 3940, 4041, 4142, 4243, 4344, 4445, 4546, …
//
//Challenge
//////////////////////Given a single positive integer n, print the first n entries of OEIS sequence A127421 in increasing order.

//Input and output can be in any acceptable format. Strings or numbers are fine for output.
//Leading zeroes are not permitted.
//Either a full program or function is permitted.
//For the purposes of this challenge, n will be positive and under 100.
//Standard loopholes are disallowed by default.
//This question is code golf, so lowest byte-count wins.
//Here is some sample input and output:

//1 => 1
//2 => 1, 12
//3 => 1, 12, 23
//10 => 1, 12, 23, 34, 45, 56, 67, 78, 89, 910

function NPlusOne(input) {
    let sequence = 1;
    for (let n = 1; n <= input; n++) {
        sequence += ", " + n + (n + 1)
    }
    return sequence;
}

console.log(NPlusOne(40));