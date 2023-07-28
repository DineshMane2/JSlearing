var eligibility=function(graduation,HSC,SSC,name){
  var result= (graduation>=70,HSC>=80,SSC>=90)? `"Congrates ${name} you are eligible for TCS interview"`:"Unfortunatly you are not eligibal for interview";
  console.log(`${result}`);
  
}
eligibility(80,86,90,"Dinesh");
eligibility(70,65,55,"Sachin");
eligibility(60,79,88,"Akash");