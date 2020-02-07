// var operand_one = 80
// var operand_two = 30

// console.log(operand_one+operand_two)

// var orignal_price = 1000
// var discounted_price = orignal_price-200
// console.log(discounted_price)

// var number_one = 1
// var number_two = 1
// var number_three = "1"
// console.log(number_three+number_one+number_two)

// console.log(number_one+number_two+number_three)

// console.log(number_three+number_one-number_two)

// var user ="junaid"
// console.log("welcome :"+user)

// var num = prompt("enter your marks")
// var num2 = prompt("enter your marks")
// console.log(num + num2)

// var num = prompt("enter your marks","100")
// var num2 = prompt("enter your marks","user")
// console.log(num + num2)

// var user = prompt("Enter your name","Junaid")
// var marks = prompt("Enter your marks","800")

// console.log("Hello " + user + " your marks is:" + marks)

// if statements

// var user = prompt("Enter your name")
// var marks = prompt("Enter your marks")

// if (marks>900 && marks<=1000){
//     console.log(user+" A+ grade")
// }

// else if (marks>800 && marks<=900){
//     console.log(user+" A grade")
// }

// else if (marks>700 && marks<=800){
//     console.log(user+" B grade")
// }

// else if (marks>600 && marks<=700){
//     console.log(user+" C grade")
// }

// else if (marks>500 && marks<=600){
//     console.log(user+" D grade")
// }

// else if (marks>400 && marks<=500){
//     console.log(user+" E grade")
// }

// else if (marks<=400){
//     console.log("FAIL")
//     document.write("FAIL")
// }

// if nested

// var nationality = prompt("Enter your nationality")

// if (nationality === "pak") {
//     var age = prompt("Enter your age");

//     if (age >= 18){
//         var nic=prompt ("Enter your NIC number");
//         console.log("NIC Number: "+nic)
//     }
//     if (age <18){
//      var b_form=prompt ("Enter your B form number");
//     console.log("B form number: "+b_form)
//     }
// }



// var val_1 = (10)
// var val_2 = (20)

// if (val_1<=10){
//     console.log("every thing is fine")
//     alert("every thing is fine")
// }


// arrays

// var foods=["nihari", "karhai", "biryani", "pizza"]

// console.log(foods [1])

// push & pop

// foods.pop()
// console.log(foods)

// foods.push("paratha")
// console.log(foods)
// document.write(foods)

// shift & unshift

// foods.shift()
// console.log(foods)

// foods.unshift("coconut", "pineapple")
// console.log(foods)

// splice(index, element no., add element)

// foods.splice(1, 3, "kabab")
// console.log(foods)


// slice
// var numbers=[1,2,3,4,5,6,7,8,9,0]

// var position=numbers.slice(3, 8)

// console.log(numbers)
// console.log(position)

// for (i=0; i <=5; i++){
//     // document.write("<b>outer loop</b>"+i + "</br>");

//     // for(j = 0; j < 4; j++) {
//     //     document.write("inner loop"+ j + "<br>");
//     // }
//     document.write("2  x "+ i + "= " + 2*i + "<br>");
// }

// for (var i = 0; i <=5; i++){
//     if ( i % 2 !== 0)
//     for ( var j = 0; j < i; j++){
//         console.log("*")
//     }
//     console.log("\n")
// }

// var num1=["0","1","2","3",]
// var num2=["1","2","3","4"]

// for (let i = 0; i < num1.length; i++) {

// }


// star pattern

// for (var i = 1; i<=4; i++){
//     for (var j = 1; j<=i; j++){
//         console.log("*")
//         document.write("*")        
//     }
//     console.log("<br>")
//     document.write("<br>")
// }
// for (var i = 1; i <=3; i++){
//     for (var j=3; j>=i; j--){
//         document.write("*")
//         console.log("*")
//     }
//     document.write("<br>")
//     console.log("<br>")
// }

// var months = ["january" , "February" , "march" , "april", "may"]
// var empty = []

// for (var index = 0; index < months.length; index++) {
//     empty.push(months[index].slice(0 , 3))    
// }
// console.log(empty)

// var array = ["hello" , "i" , "am"]

// var index=array.indexOf("i")

// array_index = array.slice(0,1)+ " 0 " + array.slice(index+1)

// console.log(array_index)
// console.log(array.length)


// var food1 = prompt("Enter_food1_amount");
// var food2 = prompt("Enter_food2_amount");
// var food3 = prompt("Enter_food3_amount");

// var total_amount = parseInt(food1) + parseInt(food2) + parseInt(food3)
// var amount_with_tax = total_amount + (total_amount / 100) * 17

// alert(amount_with_tax);

// var peoples = prompt("Enter how many peoples are sharing food")
/* console.log(amount_with_tax / peoples)


// assignment*/

// var username = prompt("Enter username")
// var password = prompt("Enter password")

// if (username.indexOf("/")>-1 || username.indexOf("%")>-1 ||  username.indexOf("*")>-1 ||  username.indexOf("$")>-1 ||  username.indexOf("@")>-1){
//     alert("not logined")
// }

// else if ( password.indexOf(username)>-1){
//     alert("Enter another password")
// }

// else alert("login successful")

// assignment

// var points=["10" ,"86" ,"36","33" ,"71" ,"2" ,"9" ,"45" ,"71" ,"8" ,"5"]
// points.sort(function(a, b){return a-b});
// document.write(points);



// var q1=prompt("Urdu was declared national language of Pakistan in:");
// var a1=1950;
// var score=0

// var q2=prompt("In which province maximum languages are spoken?");
// var a2=Balochistan;

// if (q1 == a1) {
//     score++;
// {

// if (q2 == a2){
//     score++;
// }

// else{
//     alert("try again")
// } 

// var string= "My name is khan"

// for (var i = 0; i < string.length; i++) {
//     if ( string.slice (i, i + 4)  === "khan" ){
//         string = string.slice(0, i) + "not khan" + string.slice(i + 4)
//     }
// }

// console.log(string)
// document.write(string)


// var string= "My name is junaid"

// for (var i = 0; i < string.length; i++) {
//     if ( string.slice (i, i + 6)  === "junaid" ){
//         string = string.slice(0, i) + "M.Junaid" + string.slice(i + 6)
//     }
// }

// console.log(string)
// document.write(string)

var string="my name is khan"
var search = string.indexOf("khan")

if (search > -1){
    string = string.slice(0, search) + "not khan" + string.slice(search + 4);
}

console.log(string)










