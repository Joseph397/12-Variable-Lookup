// Variable Lookup
// {} - code block

// JS starts with the local vareable first. if it is not found locally then it checks globlly
// it dosent go both ways
// JS will not look inside a vareable from outside a code block. 

const globalNumber = 5; // final lookup location (global)


function add(num1, num2){
    const globalNumber = 20; // second lookup location ( encompacing code block)
const result = num1 + num2 + globalNumber;
function multiply(){
 const globalNumber = 100;  // first lookup location (code block within code block)
 const multiplyResult = result * globalNumber;
 console.log(multiplyResult);
}
multiply();
return result;
}


console.log(add(3,4));