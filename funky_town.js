var fibonacci = function(n) {
    if (n == 1) {
        return 0;
    }
    if (n < 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

var gcd = function(a, b) {
    if (a == b) {
        return a;
    }
    rem = a % b;
    if (rem == 0) {
        return b;
    }
    return gcd(b, rem);
}

