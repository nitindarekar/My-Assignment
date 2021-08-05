var number = 11;
var isPrime = true;
for (var i = 2; i < number; i++) {
    if (number % i == 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log("It is prime number");
}
else {
    console.log("It is not Prime number");
}
