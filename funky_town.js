/* 
Team HQ
Helen Ye and Queenie Xiang
Softdev pd7 
HW15 -- Sequential Progression PHASE II
2017-12-07
*/

//List of students 
var students=["Abigail", "Bob", "Claire", "Daniel", "Eve", "Frank"]; 

var fibonacci = function(n) {
    
    if (n == 0) {
        return 0;
    }
    if (n < 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

//Euclid's algorithm for GCD 
var gcd = function(a, b) {
    if (a == b) {
        return a;
    }
    var rem = a % b;
    if (rem == 0) {
        return b;
    }
    return gcd(b, rem);
};

var random_student_selector = function() {
    var index = Math.random() * students.length 
    //Floor rounds index down to the previous, lowest integer 
    index = Math.floor(index);
    return students[index];
};

//If Fibonnaci button is clicked, fibonacci function will be called to find the 4th term in the sequence
var buttonCallbackFIB = function() {
    return console.log(fibonacci(4));
};

//If GCD: 4,2 button is clicked, gcd function will be called to find the gcd of 4,2
var buttonCallbackGCD = function() {
    return console.log(gcd(4,2));
};

//If GCD: 12,96 button is clicked, gcd function will be called to find the gcd of 12,96
var buttonCallbackGCD2 = function() {
    return console.log(gcd(12, 96));
};


var b = document.getElementById("fib");
b.addEventListener("click", buttonCallbackFIB);

b = document.getElementById("gcd1");
b.addEventListener("click", buttonCallbackGCD);

b = document.getElementById("gcd2");
b.addEventListener("click", buttonCallbackGCD2);

