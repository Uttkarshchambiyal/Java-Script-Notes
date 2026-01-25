//?-------------defining the variable here-------------------?//

let a = 10;
let b = 20;
let c = a + b;

//!----------------------------------------operator in java-script-------------------------------------------//
//todo---- there are many types of operators in js ----
// unary , assignment , comparison , logical , bitwise and many more !


console.log("a = ", a, "b = ", b) //*--- it can assign value of variable.
console.log("a + b = ", c); //*--- (+) is used to add.
console.log("a - b =", b - a); //*--- (-) is used to sub.
console.log("b / a = ", b / a); //*--- (/) is used to divide.
console.log("a * b =", a * b); //*--- (*) is used to multiply.
console.log("b%a = ", b % a); //*--- (%) is used to get remainder 
console.log("b**a", b ** a); //*--- (**) is used to get the exponent power multiplication like 2^x.

//?------------------------Unary-operator--------------------------------//

let n = 5;
n = 5 + 1;
console.log("n =", n); // value will be 6 -- 
n++; //post
//? ++n it is pre inc operator which means it will first change the value then will be used.
//* it will inc the value by 1(one) because a++ help to inc any value by 1*/
console.log("n =", n); // value will be 7 -- because we are using the post decrement operator which inc the value by 1'
n--;
//? --n it is pre dec operator which means it will first change the value then will be used. 
//* it will dec the value by 1(one) because a-- help to dec any value by 1*/
console.log("n =", n); // value will be 6 -- because we are using the post decrement operator which dec the value by 1'


//?------------------------assignment-operator--------------------------------//
//*------there are many types of assignment operators but commonly used ones are ()= , += , -= , %= , **)-------
let t = 4;
let y = 5;
t += 4; // it means t = t+4;
console.log("t =", t);
//todo---------all operators can be used like this as in same condition-------\\


//?------------------------Comparison-operator--------------------------------//
//*----there are 4 main comparison operator we use ( == , === , !== , !===) these all has their own meaning,----\\


//?------------------------logical-operator--------------------------------//
//*------------we have many logical operators but we used commonly are (--not(!),and(&&),OR(||)--)---------*/
// you can use this operator to satisfy conditions in if else or where ever you want to use them.


//!------------------------if-else_statement--------------------------------//



let age = 19;
if (age >= 18) {
    console.log(age, "can vote");
} else {
    console.log(age, "can't vote");
}

//?-----------------------------------------ternary_operator-------------------------------------------------\\

let possible = age >= 33 ? "no need to go bank they will come" : "you need to go bank";
console.log(possible);


//!------------------------switch_statement--------------------------------//
//?--- syntax for switch is ---\\
// switch (expression) {
//   case caseExpression1:
//     statements
//   case caseExpression2:
//     statements
//   case caseExpressionN:
//     statements
//   default:
//     statements
// }
/*example ---->*/
let guess = prompt("enter your f1 driver number");
switch (guess) {
    case "44":
        console.log("lewis-hamilton");
        break;
    case "1":
        console.log("max-verstappen");
        break;
    case "16":
        console.log("charles-lecler");
        break;
    case "81":
        console.log("oscar-piastre");
        break;
    default:
        console.log("not a f1 driver number");
}


//!----------------------------------------------Question - practice--------------------------------------------\\

//todo----Qs1. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.---*/

let value = prompt("enter your value");
if (value % 5 === 0) {
    console.log(value, "it is a multiple of 5");
} else {
    console.log(value, "no its not multiple of 5");
}

//todo-----Qs2. Write a code which can give grades to students according to their scores:-----------------------\\
/*
• 80-100,A
• 70-79, B
• 60-69, C 
• 50-59, D
• 0-49,  F  
*/
let marks = prompt("enter your marks");
if (marks >= 80 && marks <= 100) {
    console.log("GRADE - A");
} else if (marks >= 70 && marks <= 80) {
    console.log("GRADE - B");
} else if (marks >= 60 && marks <= 69) {
    console.log("GRADE - C");
} else if (marks >= 50 && marks <= 59) {
    console.log("GRADE - D");
} else if (marks >= 0 && marks <= 49) {
    console.log("GRADE - F");
} else {
    console.log("enter marks carefully");
}
