function display(){
  return ' I am Learning JS'
}
console.log("---step 1: Function with no argument and no return type-----");
var resultdisplay=display();
console.log(resultdisplay);

console.log('------------------');
function display1(){
    return 'I Love JavaScript'
}
var resultdisplay1=display1();
console.log(resultdisplay1);

console.log('----step 2:---------');

 function personalDetails(firstNmae,lastName,collageName){
    console.log('First Name:' ,firstNmae);
    console.log('Last Name:',lastName);
    console.log('Collage Name:', collageName);
}
personalDetails("Dinesh","Mane","GNDECB");
console.log('--------Step-3----------------');
function swapValues(arg1,arg2){
    arg1="Virat"
    arg2="Anushka"
    console.log(swapValues);
    var temp=arg1
    arg1=arg2
    console.log(swapValues);
}
var resultswapValues=swapValues;
console.log(swapValues);


 
 
