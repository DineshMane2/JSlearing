console.log('==========Step-1================');
 var square =function (num){
  var result= num*num;
     console.log(`The Suqare of "${num}" is: ${result}`);   
 }
square(5)
square(6)
square(25)
square(100)
square(67.89)
square(59)
console.log('==========Step-2================');
var Dine= function(){
 console.log(`type of funtion is: ${typeof(Dine)}`);
}
Dine();
console.log('==========Step-3================');

var area=function(l, b){
    var result = l * b ;
  console.log(`The area of rectangle is: ${result}`);
}
 area(499,917);
console.log('==========Step-4================');
var swapvalues=function(arg1,arg2){
    console.log(`Before swap the values is : ${arg1} & ${arg2}`);
    var temp=arg1
    arg1=arg2
    arg2=arg3
    console.log(`After Swap values is :${arg1} & ${arg2} `);
}
swapvalues("Mahi" , "Raina" )
swapvalues(55 , 77)
console.log('==========Step-5================');
var str =function(givenString){
    console.log(`Total Charatcter present in string : ${givenString.length} `);
    console.log(`Character at index 6 is : ${givenString.charAt(6)}`);
    console.log(`Character at index 11 is : ${givenString.charAt(11)}`);
    console.log(`The last character is:${givenString.charAt(givenString.length-1)}`);
    console.log(`The First character is: ${givenString.charAt(0)}`);
    console.log(`The  3rd last character is:${givenString.charAt(givenString.length-3)}`);
    var result=givenString.split(" ")
    var words=result.length;
    console.log(`The total number of words is : ${words} and "square of number is":${words*words}` );

}
str("JS is the most popular language of internet")

