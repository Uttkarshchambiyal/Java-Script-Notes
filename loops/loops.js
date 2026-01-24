//!======================================== loops in java script ================================================


//!----------------------------------- for loops in java script we have simple syntax-------------------!\\


// for (initialization; condition; afterthought)
//     statement //* this is the statement used for the creating loops!--->
//----------------------------------------------------------------------------------------------------------------

//?--------------------------------------there 5 types of loops in js ------------------------------->
// for loop , while loop , do while loop....>

//* for loop */------------------->
// for (initialization; condition; afterthought){}
//     statement}

/* example of (for loop)*/
for (let i = 0; i <= 5; i++) {
    console.log("i have", i, "pens");
}

/* example calculate sum of 5 natural number */
let total = 0;
for (let i = 1; i <= 5; i++) {
    total = total + i;
}
console.log("sum of 5 natural number is :", total); // this si the example of finding n natural number sum!
//--------------------------------------------------------------------------------------------------------------\\

//* for loop */--------------------->
// let any variable;//? in while its important to define the variable before the loop!
// while(condition){
// statement }

/* example of the (while loop) */
let j = 1;
while (j <= 5) {
    console.log("this will show how many time j will print now :", j);
    j++; //? required to update j if it will not it become infinite loop!
}

//* do while loop */--------------------->
//let any variable
//do { //? it will run at least one time , no condition checking statement is true or false!
// statemnent}
//while (condition);

/* example of the ( do while loop) */
let k = 10;
do {
    console.log(" do while at least one time it will show the value");
    k++;
} while (k >= 12);


/* these three loops which we talk about for , while , do while loops are generally used loops in all the languages. but there are two more loops in the java script */
//? these are (for-of and for-in)---->
// these loops are generally used for arrays and the string , in this loop we not define to any condition !

//* for of loop */--------------------->
//for (variable of iterable){
//statement} //?--this is the only syntax we need for the (for of loops)---

/* example of the ( for of loop) */
let size = 0;
let str = "uttkarsh";
for (let o of str) { // iteration --> chracters
    console.log("o=", o);
    size++;
}
console.log("string size = ", size, str);

//* for in loop */--------------------->
//The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
//? Syntax---->
// for (variable in object)
//   statement

/* example of the ( for of loop) */
let student = {
    name: "uttkarsh",
    college: "1sem",
    rollno: 102,
    ispass: true
};
for (let p in student) {
    console.log("its prints keys :", p, "the value of keys is ", student[p]);
}

//!------------------------------------practice questions------------------------------------------------------!\\
// print all 100 natural number.
for (let y = 1; y <= 100; y++) {
    console.log(y);
}
//------Qs2.---->
//Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
//* answer----->
let realvalue = 44;
let value = prompt("guess the number");
while (realvalue != value) {
    value = prompt("wrong guess enter agian");
}
console.log("you catch it right");
