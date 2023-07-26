var greaterNumber=function(arg1,arg2){
  var greater=arg1>arg2
  console.log(`The greater value is: ${greater}`);
}
greaterNumber(10, -10);
greaterNumber(800,899);

console.log("=======step 2==========");
var isEvenOrOdd=function(num){
   var result=num%2>0? "even" : "odd"
   console.log(`The number is :${result}`);
}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(9);
isEvenOrOdd(102);
console.log("=======step 3============");
var wordLength=function(string){
   var evenOrOdd=string.length
   var result=evenOrOdd%2==0? "even":"odd"
   console.log(`The word length is : ${evenOrOdd} and the length is ${result}`);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");

