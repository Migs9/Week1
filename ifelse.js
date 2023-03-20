// If else start

// let weather = "rainy"

// if (weather === "sunny") {
//     console.log("Well, I better wear some sunscreen!")
// } else if  (weather == "rainy") {
//     console.log("Better take an umbrella")
// } else { 
//     console.log("Hmmm, it could go either way!")
// }

// if you change the sunny/rainy to capitals the answer changes as it no longer is an exact copy

// exercise 2

// let place = "Manc";
// let weather = "Sunny";

// if ((place == "Manc" || "manc") && (weather == "Sunny" || "sunny")){
//     console.log("Check Again");
// }
// else if ((place == "Manc" || "manc") && (weather == "Rain" || "rain")){
//     console.log("Obviously");
// }
// else {
//     console.log("What, it isn't raining?");
// }


// car maker switch example

// let car = "Peugeot"

// if (car == "Ford" || car == "GM"){
//     console.log("You've got an american car!");
// }
// else if (car == "Peugeot" || car == "Citroen"){
//     console.log("You've got a French boy!");
// }
// else if (car == "Honda" || car == "Toyota" || car == "Suzuki"){
//     console.log("Japanese cars are quiet!");
// }
// else if (car == "Mercedes"){
//     console.log("You're proper posh German!");
// }
// else if (car == "Volkswagen"){
//     console.log("German aren't bad at all!");
// }
// else if (car == "Hyundai" || car == "Kia"){
//     console.log("SK cars are popular!");
// }
// else {
//     console.log("Your car is not in the top ten popular!");
// }


// car maker switch statement code

// let car = "Peugeot"

// switch(car){
//     case "Ford":
//     case "GM":
//         console.log("You've got an american car!")
//         break;
//     case "Peugeot":
//     case "Citroen":
//         console.log("You've got a French boy!")
//         break;
//     case "Honda":
//     case "Suzuki":
//     case "Toyota":
//         console.log("Japanese cars are quiet!")
//         break;
//     case "Mercedes":
//         console.log("You're proper posh German!")
//         break;
//     case "Volkswagen":
//         console.log("German aren't bad at all!")
//         break;
//     case "Hyundai":
//     case "Kia":
//         console.log("SK cars are popular!")
//         break;
//     default:
//         console.log("Your car is not in the top ten popular!")
// }

// Activity one - age variable - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let age = 18.0
// let country = "UK"

// if (age >= 18 && country == "UK") {
//     console.log("Yes I can serve you") 
// }
// else {
//     console.log("Sorry, can't serve you")
// }

// Activity 2 - pizza toppings - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// var pizza = "onion" 

// switch (pizza){
//     case "onion":
//     case "olives":
//         console.log("These are my favourite ingredients for my pizza")
//         break;
//     case "pepperoni":
//     case "mushrooms":
//         console.log("I dont mind having " + pizza + " on my pizza")
//         break;
//     default:
//         console.log(pizza + " should not be on pizza")
// }

// Activity 3 - password - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// var password = "supercalifragilisticexpialidocious"

// if (password.length <= 8){
//     console.log("Your password is too short");
// }
// else {
//     console.log(password)
// }

// Activity 4 - divisions - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// the way % works is that it looks to see if there are any remainders left after the division, so for 10 / 5 = 2, there are
// no other numbers left, it all got used. 11 / 5 = 2.2, the .2 makes it so that it is not === 0 and therefore false

// var num = 11

// if (num % 3 === 0|| num % 5 === 0){
//     console.log("This number is divisible by 3 or 5")
// }
// else {
//     console.log("Nope, try again")
// }

// Activity 5 - divisions v2 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// var num = 15

// if (num % 3 === 0 && num % 5 === 0){
//     console.log("fizz buzz");
// }
// else if (num % 3 === 0){
//     console.log("fizz");
// }
// else if (num % 5 === 0){
//     console.log("buzz");
// }
// else {
//     console.log("num")
// }

// Activity 6 - - palindrome - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// var num = 12321

// let reversedNum = parseInt(num.toString().split("").reverse().join("")); 
// if (num === reversedNum) { 
//     console.log("This number is a palindrone") 
// } 
// if (num != reversedNum) { 
//     console.log("This number is NOT a palindrone") 
// }

// Activity 7 - time - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let time = 12 ;
// let placeOfWork = "Office" ;
// let townOfHome = "Home" ;

// if ((time >= "8" && time < "9") || (time >= "17" && time < "18")) {
//     console.log("I'm commuting");
// }
// else if (time >= "9" && time < "17"){
//     console.log("I'm at work");
// }
// else if ((time >= "18" && time < "24") || (time >= "00" && time < "8")){
//     console.log("I'm at home");
// }
// else {
//     console.log("Enter a valid time")
// }

// //  Activity 8 - Indexing a string - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let jumbled = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// let vowels = ["a","e","i","o","u"]

// let arr = jumbled.split("").reverse(""); // split string into array, and reverse it so that you can start searching from the end
// let vowelindex = arr.findIndex(e => vowels.includes(e))

// if (vowelindex != -1) {     // if the index is -1 there is no vowel in the string
//     let index = jumbled.length-1-vowelindex
//     console.log(`Last vowel found at index ${index}: ${jumbled[index]}`)
// }
// else {
//     console.log("There's no vowel, please try again")
// }

// // Activity 9 - First letter same as last - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


// let word = "regular";
// let letter1 = word.charAt(0);
// let letter2 = word.charAt(word.length-1);

// if (letter1 == letter2){
//     console.log("true")
// }
// else {
//     console.log("false")
// }

// Alternative way / Advanced Way

// let word = "regular"
// let wordplay = /(^[a-zA-Z])(.*)\1$/gi;
// console.log(wordplay.test(word))

// ^             #  Represents beginning of a line
// [a-z]         #  Alphabetic character
// .*            #  Any character 0 or more times
// [a-z]         #  Alphabetic character
// $             #  End of a line
// i             #  Case-insensitive match
// g             #  Global
// m             #  Multiline

// 1 - - ^ asserts position at start of the string
// 2 - - 1st Capturing Group (.)
// 3 - - .* matches any character (except newline) - between zero and unlimited times, as many times as possible, giving back as needed (greedy)
// 4 - - \1 matches the same text as most recently matched by the 1st capturing group
// 5 - - $ asserts position at the end of the string

// Activity 10 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

let num1 = 34
let num2 = 2

if ((num1 + num2) % 2 === 0 ){
    console.log(num1+num2);
}
else {
    console.log(num1*num2);
}



