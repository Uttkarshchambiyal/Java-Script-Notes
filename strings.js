//!============================================== strings in js ===============================================!\\
//? String is a sequence of characters used to represent text
//* */ Create String
// let str = "Uttkarsh";
//* */ String Length
// str.length
//* */ String Indices
// str[O], str[1], str[2]

//todo -------syntax for string is-------------->
// const string1 = "A string primitive";
// const string2 = 'Also a string primitive';
// const string3 = `Yet another string primitive`;
// const string4 = new String("A String object");

//?---------Template Literals in JS------------>
// A way to have embedded expressions in strings
// 'this is a template literal'
// String Interpolation
// To create strings by doing substitution of placeholders
// 'string text ${expression} string text'

/* example of string */
let specialstring = `Raftaar`;
console.log(specialstring);

/* example of literal string */
let obj = {
    item: "pen",
    price: 20,
};
let output = `the value of ${obj.item} is equal to ${obj.price}`
console.log(output);
console.log("the value of", obj.item, "is equal to", obj.price);

//? ------------------------escape - equations----------------------------------?\\--- 1-chracter value
// \n are used to get next line
// \t for white space
// \d, \D
// \s, \S
// \w, \W


//?-------------------------------------String Methods in JS----------------------->
//* */ These are built-in functions to manipulate a string
// • str.toUpperCase()
// • str.toLowerCase()
// • str.trim( ) II removes whitespaces
// • str.slice(start, end?) II returns part of string
// • str1.concat( str2 ) II joins str2 with str1
// • str.replace (searchVal, newVal)
// • str.charAt( idx )


//! ========================================= Lets practice ================================================== !\\

// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = "shradhakhapra", username should be "@shradhakhapra13"

let fullName == prompt("enter you username");
let ig = `@${fullName}${fullName.length}`;
console.log(ig);