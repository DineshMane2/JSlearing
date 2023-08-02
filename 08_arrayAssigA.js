 
const arrayFruits=["Banana", "Orange","Apple","Mango","Water Melon"];
let firstElement= arrayFruits[0];
console.log(`First element of array - ${firstElement}`);

LengthOfArray=arrayFruits.length;
let LastElement=arrayFruits[LengthOfArray-1]
console.log(`Last element of the array - ${LastElement}`);

console.log("======step 2 use Unshift to add element ==============");
arrayFruits.unshift("Papaya");
console.log(`Added element papaya in the array - [${arrayFruits}]`);

console.log("======step 3 Use splice to remove element in the array============");
arrayFruits.splice(4,1)
console.log(`Removed Mango element from an array - [${arrayFruits}]`);
console.log("======step 4 Use push to add the element at the last position============");
arrayFruits.push("Pineapple");
console.log(`Added element pineapple at the last position of array - [${arrayFruits}]`);
console.log("======step 5 use splice to add element in an array ============");
arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`Added element Dragon Fruit before the index 4 -[${arrayFruits}]`);
console.log("======step 6 use splice to replace element in an array ============");
arrayFruits.splice(2,1,"Kiwi");
console.log(`Repleaced Orange as Kiwi - [${arrayFruits}]`);
console.log("======step 7 use slice to print  element in an array ============");
let firstFourElement=arrayFruits.slice(1,5);
console.log(`Print the element from index 1 to 4 - [${firstFourElement}] `);
console.log("======step 8 use slice to print last 3 element in an array ============");
let lastThreeElement=arrayFruits.slice(arrayFruits.length-3)
console.log(`Print the last three element in the array - [${lastThreeElement}]`);



    



