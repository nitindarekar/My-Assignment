
 //console.log(fibonacci_series(8));
 let n1 = 1, n2 = 1, nextTerm;
 let number = 21;
for (let i = 1; n1 <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

