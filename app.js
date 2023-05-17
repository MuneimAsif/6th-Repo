// var a = 123.11434
// a = a.toFixed(3)
// console.log(a)


// To convert string into numbers
// var a = 123.23
// a = +a
// a = Number(a)
// a = parseInt(a)
// a = parseFloat(a)
// To convert number into string
// a = a.toString();

// =================== D   A   T   E =====================================

// var date = new Date();
// var days = ["sun","mon","tue","wed","thus","fri","sat"]
// consolelog("Date ===> ",date.getDate())
// console.log("Day ===> " ,days[date.getDay()])
// console.log("Year ===>",date.getFullYear())
// console.log("Hours",date.getHours())
// console.log("Miliseconds ===>",date.getMilliseconds())
// console.log("Minutes ===>",date.getMinutes())
// console.log("Month ===>",date.getMonth())
// console.log("Seconds ===>",date.getSeconds())
// console.log("Time ===>",date.getTime())

// var date = new Date("01-15-2000");

// Conversion of Miliseconds into Year
// var b = 21321144324343
// b = b/(1000*60*60*24*365
// ========================

// AGE CALCULATOR PRACTISE
// var date1 = new Date();
// var user = prompt("Enter DOB")
// var date2 = new Date(user)
// var time1 = date1.getTime()
// var time2 = date2.getTime()
// var totalTime = time1 - time2
// var conversion = totalTime/(1000*60*60*24*365)
// var roundoff = Math.floor(conversion)
// console.log(roundoff)

// ================== Age Calculator=====================//
//  var date = new Date();
// var user = prompt("Enter DOB")
// var dob = new Date(user)
// console.log(date.getTime())
// console.log(dob.getTime())
// var a = date - dob
// var b = a/(1000*60*60*24*365)
// var c = Math.floor(b);
// console.log(c)

// ===================  AJAVASCRIPT ASSIGNMENT OF CHAPTER 1-20 =======================================

// ================ CHAPTER NO 1 ================

// 1
// alert("Albert");
// alert("Einstein");
// alert("alberteinstein92@gmail.com");
// alert("03243290873");
// alert("E=mc square");

// alert("You're learning JavaScript!");

// 3
// alert("Pakistan Zindabad");


// ================= CHAPTER NO 2 ================

// 1
// var a = "HelloWorld";
// console.log(a);

// 2
// var b;;
// b = "Hello World";
// console.log(b)

// 3
// var teamName = "Karachi Kings";
// console.log(teamName);

// 4
// var bestMan = "Every dad is a best man for him/her.";
// console.log(bestMan);


//  ==================== CHAPTER NO 3 =============

// 1,2
// var caseQty = 144;
// console.log(caseQty);

// 3
// var num = 9;
// console.log(num);

// 4
// var num;
// num = 5 + 9;
// console.log(num);    

// 5
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// console.log(orderTotal);

// 6
// var a = 5;
// var b = a + 6;
// console.log(b);


//  =========== CHAPTER NO 4 ====================

// 1
// var productCost = 3.45;
// console.log(productCost);

// 2
// simple
// var Nameofband;
// camel case method
// var NameOfBand;

// 3
// var $ = 123;
// console.log($);

// 4
// var MuneimAsif;

// 5
// Legal Variable Names
// var abc;
// var abc123;
// var $;
// var a_b_c;
// var a1b2c3;
// var _abc;
// var _123;
// Illegal
// var 123;
// var 123abc;
// var #abc;
// var @#abc;
// var &abc


//  ============= CHAPTER NO 5 ====================

// 1
// let remainder = 10 % 3;
// console.log(remainder); 

// 2
// var num = 20 % 6;
// console.log(num);

// 3
// var largeNum = 1000 * 2000;
// console,log(largeNum);

// 4
// var a = 5;
// var b = 2;
// var c = a - b;
// console.log(c);

// 5
// let myRemainder = 25 % 7; // assigning the remainder of 25 divided by 7 to myRemainder
// console.log(myRemainder); 

// 6
// var num1 = 5;
// var num2 = 6;
// var result = num1 * num2;
// alert(result);


// =================== CHAPTER NO 6 =================

// 1
// var x = 1
// x++
// x += 1
// console.log(x)

// 2
// var x = 100;
// x--
// console.log(x)

// 3
// var x = 50;
// var y = x++;
// console.log(y)

// 4
// var y = 50;
// var z = --y;
// console.log(z)

// 5
// var x = 5;
// --x
// var y = ++x
// console.log(y)

// 6
// var x = 5;
// x++
// var y = s--x;
// console.log(y)

// 7
// var x = 5;
// x++
// alert(x);


// ============ CHAPTER NO 7 ====================

// 1
// var calculatedNum = 5 + (4 * 4);
// console.log(calculatedNum);

// 2
// var calculatedNum = (54 + 3) * 3;
// console.log(calculatedNum);

// 3
// var calculatedNum = (5 + 2) * (7 + 3);
// console.log(calculatedNum);

// 4
// var calculatedNum = ((4 + 3) * 7) + 9;
// console.log(calculatedNum);

// 5
// var cost = (2+2)*(4+10);
// console.log(cost);

// 6
// var units = (2 + (2 * 4)) + 10;
// console.log(units);

// 7
// var pressure = 4 / 2  * 4;
// console.log(pressure)


// =============== CHAPTER NO 8 ==============

// 1
// var num = "2" + "2";
// console.log(num);

// 2
// var message = ("Hello" + "Dolly");
// alert(message);

// 3
// alert("33" + 3)

// 4
// var a = "Pakistan " + "Zindabad";
// alert(a);

// 5
// var a = "25" + 2;
// console.log(a);

// 6
// var a = "Pakistan ";
// var b = "Zindabad";
// var c = a + b;
// console.log(c);


// ============ CHAPTER NO 9 ==================

// 1
// var user = prompt("Enter First Name");
// console.log(user);

// 2
// var user = prompt("Country?","China");
// console.log(user);

// 3
// var yourName = prompt("Enter Your Name");
// console.log(yourName);

// 4
// var user = prompt("Make Sure That The Following Input You'll Give To Us Is Correct","I am joining you for a better future");
// console.log(user);

// 5
// var a = "Country?";
// var b = "Pakistan";
// var user = prompt(a,b);
// console.log(user)

// 6
// var user = prompt("Country?","Pakistan");
// alert(user);


// =============== CHAPTER NO 10 ====================

// 1
// var city = "Karachi"
// if (city == "Karachi") {
// console.log("The City OF Lights")}

// 2
// var x = 2;
// var y = 2;
// if(x === y){
//     var user = +prompt("Enter the value of z")
//     console.log(user)
// }

// 3
// var zipcode = 10010;
// if(zipcode === 10010){
//     alert("Karachi")
// }else{
//     alert("Please Write Correct City")
// }

// 4
// var x = 3;
// if(x == 3){
//     x = 4;
//    console.log(x)
// }


// ================== CHAPTER NO 11 ====================

// 1
// var x = 10;
// if(x !== 10){
//     console.log("Found");
// }else{
//     console.log("Not Found");
// }

// 2
// var a = 5;
// var b = 6;
// if(b >= 6){
//     console.log("Condition true")
// }

// 3
// var a = 5;
// if(a !== 5){
//     console.log("Found");
// }else[
//    console.log("Not Found");   
// ]

// 4
// var a = 4;
// if(a !== 3){
//     alert("Congratulations")
// }

// 5
// var nameOfStdnt = "Farhan";
// var user = prompt("Enter Your Name");
// if(user !== nameOfStdnt){
//     alert("No Match")
// }


//  =============== CHAPTER NO 12 ==================

// 1
// var a = 5;
// var b = 3;
// if( a >= b){
//     alert("True")
// }else{
//     "False"
// }

// 2  (MarkSheet)
// var sub1 = +prompt("Enter English Marks");
// var sub2 = +prompt("Enter Urde Marks");
// var sub3 = +prompt("Enter Maths Marks");
// var total = sub1 + sub2 + sub3;
// var perc = (total/300)*100;
// if(perc >= 80){
//     console.log("Your percentage is "+ perc + "% & You have achieved A1 Grade")
// }else
// if(perc >= 70){
//     console.log("Your percentage is "+ perc + "% & You have achieved A Grade")
// }else
// if(perc >= 60){
//     console.log("Your percentage is "+ perc + "% & You have achieved B Grade")
// }else
// if(perc >= 50){
//     console.log("Your percentage is "+ perc + "% & You have achieved C Grade")
// }else
// if(perc >= 40){
//     console.log("Your percentage is "+ perc + "% & You have achieved D Grade")
// }else
// if(perc > 32 ){
//     console.log("Your percentage is "+ perc + "% & You have achieved E Grade")
// }else
// if(perc >= 0){
//     console.log("Your percentage is "+ perc + "% & You Failed")
// }

// 3
// var a = 8
// if (a === 10) {
//     alert("a is 10");
//     }else{
//         alert("The correct value of a is " + a);
//     }

// 4
// var a = "karachi";
// var b = "lahore";
// var user = prompt("Enter City")
// user = user.toLowerCase();
// if(user == a){
//     alert("Yeah!This is Karachi");
// }else
// if(user == b){
//     alert("Yes! It is Lahore");
// }else
// if(user != a || user != b){
//     alert("Enter A City From The Given Names");
// }


// ============ CHAPTER NO 13 ==================

// 1
// var a = 2;
// var b = 3-1;
// var c = 4;
// var d = 2 * 2;
// if(a ==b && c == d){
//         console.log("True")
// }

// 2
// var a = 2;
// var b = 3-1;
// var c = 4;
// var d = 2 * 3;
// if(a ==b || c == d){
//         console.log("True")
// }

// 3
// var name1 = "Hamza";
// var name2 = "Kareem";
// var age = 60;
// if((name1 == "Hamza" || name2 == "Arsalan")&& age == 60){
//     console.log("Condition true")
// }

// 4
// var a = 10;
// var b = 11;
// if(a > b || a < b){
//     console.log("True")
// }

// 5
// var name1 = "Muhammad Muneim";
// var name2 = "Muhammad Asif";
// var user1 = prompt("First Name");
// var user2 = prompt("Last Name");
// if(user1 == name1 && user2 == name2){
//     alert("Found!")
// }


// ============== CHAPTER NO 14 ==========

// 1
// var pass = 4;
// if(pass == 4){
//     if(pass < 5){
//         alert("Password must be greater than 5")
//     }
// }

// 2
// var a = 1;
// var c = "Max"
// if (a === 1) {
//     if (c === "Max") {
//     alert("OK");
// }
// }

// 3
// var a = 1;
// var c = "Max";
// if(a == 1 && c == "Max"){
//     alert("ok")
// }

// 4
// var a = 10;
// var b = 10;
// if(a == b){
//     if(a <= b){
//         alert("Ok")
//     }
// }


// ========== CHAPTER NO 15 (ARRAY I) ==============

// 1
// var arr = [ ];

// 2
// var arr = ["HelloWorld"];
// console.log(arr);

// 3
// var alphabet = ["h","i","j","k"];
// alert(alphabet[2]);

// 4
// var alphabet=["h","i","j","k", "l","m", "n", "o"];
// console.log(alphabet.length);

// 5
// var arr = ["Muneim"," "];
// arr[1] = "Asif";
// alert(arr[1]);


// ============ CHAPTER NO 16 (ARRAY II) ============

// 1
// var arr = ["Muneim"];
// arr.push("Asif");
// alert(arr[1]);

// 2
// var Alphabet=["h","i","j","k"];
// Alphabet.pop();
// console.log(Alphabet);

// 3
// var Alphabet=["h","i","j","k"];
// Alphabet.push(4);
// console.log(Alphabet);


// =========== CHAPTER NO 16 (ARRAY III) ============

// 1
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();
// console.log(sizes);

// 2
// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// sizes.unshift(2,4,6);
// console.log(sizes);

// 3
// var arr = ["Asif"];
// arr.unshift("Muneim");
// alert(arr[0]);

// 4
// var sizes = ["S", "M"," ", "XL", "XXL", "XXXL"];
// sizes[2] = "L";
// console.log(sizes);

// 5
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0,3);
// console.log(regSizes);

// 6
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1,3,"cow","goat")
// console.log(pets);

// 7
// var pets = ["dog", "cat", "ox", "duck", "frog"];

// pets.splice(1,2);
// console.log(pets);

// 8
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var newPets = pets.slice(3,5);
// console.log(newPets);


// =========== CHAPTER NO 17 - 20 (FOR LOOP) ===========

// 1
// for(var i = 0; i <= 10; i++){
//     console.log(i)
// }

// 2
// for (var i = 0; i <= 12; i++){
//     console.log(i)
// }

// 3
// for (var i = 0; i <= 4; i++){
//     console.log(i)
// }

// 4
// for (var j = 0; j < 101; j++){
//     console.log(j)
// }

// 5
// for (var i = 3; i > 0; i--){
//     console.log(i)
// }

// 6
// var arr = [1,2,3,4,5,6,7,9,10];
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// 7
// var flag = true;
// for(var i = 0; i < 10; i++){
//     if(flag == true){
//         console.log(i)
//     }
// }

// 8
// var pets = ["Dog","Cat","Bull","Cow","Goat","Sheep"];
// for (var i = 0; i <= pets.length; i++){
//     console.log(i)
// }

// 9
// for (var i = 0; i <= 10; i++){
//     if(i === 1){
//         alert(i)
//     }
// }

// 10
// var userNames = ["Alice", "Bob", "Charlie", "Dave"];
// var firstName = prompt("Enter first name:");
// for (var i = 0; i < userNames.length; i++) {
// if (firstName === userNames[i]) {
// alert("Enter");
// break;
// }
// if (i === userNames.length - 1) {
// alert("Please write correct user name");
// }
// }

// 11
// var list = [1,2,3,4,5]
// var userInput = +prompt()
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//   if (userInput === list[i]) {
//     alert("Match found");
//     matchFound = true;
//     break;
//   }
// }
// if (!matchFound) {
//   alert("No match found");
// }

// 12
// var firstArr = ["a","b","c","d","e"];
// var secondArr = [1, 2, 3, 4, 5, 6];
// for(var i = 0; i < firstArr.length; i++){
//     for (var j = 0; j < secondArr.length; j++){
//         console.log(firstArr[i]+secondArr[j])
//     }
// }

//  ===========================    T H E       E N D   ===========================================