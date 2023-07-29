function marriageEligibility(gender,age) {
    if (gender=="Male" && age>=21) {
        console.log(`Entered Gender is ${gender} and age is  ${age}, you are eligibale for marriage `);
    }
    if (gender=="Male" && age<21) {
        console.log(`Entered Gender is ${gender} and age is  ${age}, you are not eligibale for marriage `);
    }
    if (gender=="Female" && age>=18) {
        console.log(`Entered Gender is ${gender} and age is  ${age}, you are eligibale for marriage `); 
    }
    if (gender=="Female" && age<18) {
        console.log(`Entered Gender is ${gender} and age is  ${age}, you are not eligibale for marriage `); 
    }
     

}
marriageEligibility("Male",22);
marriageEligibility("Male",15);
marriageEligibility("Female",18);
marriageEligibility("Female",15);


