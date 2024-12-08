// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Not prime if divisible
    }
    return true; // Prime if no divisors found
}

// Function to check if a number is even or odd
function evenOdd(num) {
    return num % 2 === 0; // Returns true if even, false if odd
}

// Example usage
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(evenOdd(4)); // true
console.log(evenOdd(7)); // false
