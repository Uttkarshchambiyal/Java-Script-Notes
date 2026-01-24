// add in js 
let a = 0.3;
let b = 0.1;
console.log(a + b);
// subtract in js
let a1 = 3;
let b1 = 2;
console.log(a1 - b1);
// multiplication in js 
let a2 = 0.3;
let b2 = 0.1;
console.log(a2 * b2);
// divide in js
let a3 = 3;
let b3 = 2;
console.log(a3 / b3);
// !------------------------// variables in js //--------------------------//

//? these are primitive data types - number , string , boolean , undefined , null , symbol , Bigint//

//* var is a global variable used oftenely because of its scope and function !-- var can be initialise and redefine again//
var fullName = "Uttkarshchambiyal";

//*  let is a variable in used to once to initialise but you can update value later its scope is block !//----
let age = 19;

//* cosnt is a variable in js in which you asign and initialise value only once!//------
const rollNo = 102;

//-----------------------------------------------------------------------------------------------------------//

//?-------------------------// non primitive data types - arrays and function(methods) //--------------------//
// it is a collection of primitive data types variable in which you can store  //
const student = { // we are using const as using the array & the student is a object (collection of the variables)!
    fullName: "me", // we can assign any value in the array even the data type is const!
    age: 20, // we can also assign the value by the// TODO: - student["age"] = student["age"] + 40; - this will replace the value by 20 to 40!
    cgpa: 5.0, // 
    ispass: true,
}; // we have choice to use (;) its your own choice.
console.log(student.age); // we can also use ["age"]
