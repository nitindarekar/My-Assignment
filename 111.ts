 // A = 20 ; B = 10         
// A = A + B 10 + 20 = 30      
// B = A - B 30 - 10 = 20   ANS A=10 & B=20
// A = A - B 20 - 10 = 10
  var A = 20, B = 10; 
  A = A + B;
  B = A - B;
  A = A - B;
  console.log("two digit addition old value A = 20 and New Value is A",A);
  console.log("two digit addition old value B = 10 and New Value is B",B);

//A = 150 ; B = 50
// A = A * B = 150 * 50 = 7,500
// B = A / B = 7,500 / 50 = 150
// A = A / B = 7500 / 150 = 50
 var A = 150, B = 50; 
  A = A * B;
  B = A / B;
  A = A / B;

  console.log("two digit multiplcation old value A = 150 and New Value is A",A);
  console.log("two digit multiplcation old value A = 50 and New Value is B",B);       
  
// A = 30, B = 25, C = 0
// c = A 
// A = B
// B = C 

var  A = 30, B = 25, C = 0;

C = A;
A = B;
B = C;

console.log("3rd digit old value A = 30 and New Value is A",A)
console.log("3rd digit old value B = 25 and New Value is B",B)
console.log("3rd digit old value C = 0 and New Value is  C",C)