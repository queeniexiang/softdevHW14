/* 
Team HQ
Helen Ye and Queenie Xiang
Softdev pd7 
HW15 -- Sequential Progression
2017-12-06
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




    

