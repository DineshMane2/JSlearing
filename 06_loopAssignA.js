var vowelCount=function(str){
    let count=0;
for (let index = 0; index < str.length; index++) {
     let char=str.charAt(index) 
     if (char=="a" || char=="A"|| char=="e" || char=="E" || char=="i" || char=="I" || char=="o" || char=="O"  || char=="u" || char=="U" ) {
      { console.log(char);
        count=count+1
     }
    }
 }
 console.log(count);
}
vowelCount("I am very good IT Developer")

console.log("==========================");
let sumOfCube=function(){
    let totalSum=0;
    for (let index = 1; index <=5 ; index++) {
        let sum= index*index*index;
        totalSum=totalSum+sum;
        //  console.log(sum);
     }
    console.log(`Total sum of 1 to 5 cube ${totalSum} `);
}
sumOfCube();

console.log("=========================================");
let oddPositionedChars=function(str){
 for (let index = 0; index < str.length; index++) {
    const char= str.charAt(index);
    if (index%2 !=0 && char!=" ") {
        console.log(char);
    }
    
 }
}
oddPositionedChars("Hard work always pays back");
console.log("==================");
oddPositionedChars("Soon I will be a Angular IT champ");


