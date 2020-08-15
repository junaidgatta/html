// alert ("hello world");

// var a = 10;
// var b = 15;
// var c = a+b;

// alert (c);

// var a = 10;
// var b = 15;
// var c = a+b;

// console.log (c);

// var x = "Muhammad";
// var y = "ali";
// var z = y+x;

// console.log (z);

// var e = 10;
// var f = "5";
// var g = f+e;

// console.log (g);

// var a = 2;
// var b = 5;
// var c = 8;
// var d = (a + b) * c;

// console.log (d);

// var a = 2;
// var b = a++;
// console.log (b);
// console.log (a);


// var x = 2;
// var y = x++ + ++x;
// console.log (y);

// var a = "hello";
// var b = 50;
// var c = 6;
// console.log (a + b + c);


// moduler
// var a = 5 % 2;
// console.log(a);

// var a = 9 % 3;
// console.log(a);

// var a = prompt ("Enter your age","Your age is");
// var b = (a + 5);
// alert(b);
// console.log(b);

// // prompt with integer
// var weight = +prompt ("Enter your Weight","Your weight is");
// var netWeight = (weight + 20);
// alert(netWeight);
// console.log(netWeight);

// prompt integer with parseInt
// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseInt(currentAge) + 1;
// console.log(qualifyingAge);

// if statements
// var age = prompt("Enter your age");
// if(age <= 18){
//     console.log("Your age is less");
// }
// else {
//     console.log("You are no more with less age")
// }

// var age = +prompt("Enter your age");
// var gender = prompt("Enter your gender");

// if (age >= 18 && gender == "male") {
//     alert("You are allowed to ride");
// } 
// else {
//     alert("You are not allowes")
// }

// var a = 10;
// var b = 15;
// var x = 50;
// var z = 25;

// if (x-z === a+b) {
//         alert("Correct");
// } 
// else {
//     alert("Incorrect");
// }

// if statment
// var Percentage = +prompt("Enter your percentage");
// if (Percentage >= 80 && Percentage <= 100) {
//     alert("A+")
// } 
// else if (Percentage >= 70 && Percentage < 80){
//     alert("A")
// }
// else if (Percentage >= 60 && Percentage < 70){
//     alert("B")
// }
// else if (Percentage >= 50 && Percentage < 60){
//     alert("C")
// }
// else if (Percentage >= 40 && Percentage < 50){
//     alert("D")
// }
// else if (Percentage >= 33 && Percentage < 40){
//     alert("E")
// }
// else if (Percentage >= 0 && Percentage < 33){
//     alert("F")
// }
// else {
//     alert("Enter Your Correct percentage");
// }

// Arrays
// var Students = ["Basit", "Ahmed", "Ali"];

// console.log(Students);
// console.log("Welcome" , Students[2]);

// var names = [];

// names[0] = "Basit";
// names[1] = "Ahmed";
// names[2] = "Ali";

// console.log(names);

//Remove array's end value
// var Students = ["Basit", "Ahmed", "Ali"];
// Students.pop();

// console.log(Students);

//Add array's end value
// var Students = ["Basit", "Ahmed", "Ali"];
// Students.push("Raheel");

// console.log(Students);


// Remove array's start value
// var Students = ["Basit", "Ahmed", "Ali"];
// Students.shift();

// console.log(Students);


// Add array's start value
// var Students = ["Basit", "Ahmed", "Ali"];
// Students.unshift("Wahab");

// console.log(Students);


// Add and remove elements between the array
// var Students = ["Basit", "Ahmed", "Ali"];
// Students.splice(1,1,"Nazeer","Mubashir");

// console.log(Students);


var Students = ["Basit", "Ahmed", "Ali","Zeesan"];

var copyStudents = Students.slice(1,3);

console.log(Students);
console.log(copyStudents);


















