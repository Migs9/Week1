// let favDrinks = ["Coke", "Fanta", "Tonic"];

// console.log(favDrinks[0]);
// console.log(favDrinks[1]);
// console.log(favDrinks[2]);

// loop the results - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let favDrink = ["Coke", "Fanta", "Tonic", "Red Bull"];

// for (let i = 0; i < favDrink.length; i++){
//     console.log(favDrink[i]);
// }

// loops with if statements - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let multipleTwo = [];

// for (let i = 0; i < 20; i++){
//     if (i % 2 == 0){
//         multipleTwo.push(i);
//     }
// }
// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multipleTwo}`);

// While condition on loops 

// let age = 15; 
// while (age < 18) { 
//     console.log(age + " - You're a child!"); age++; 
// } 
// console.log(age + " - You're an adult!");

// Card suit gets randomized until it lands on spade - - - - - - - - - - - - - - - - - - - - - - - - - -

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while (currentCard != "Spade"){
//     console.log(currentCard)
//     currentCard = cards [Math.floor(Math.random()*4)]
// }
// console.log(currentCard)


// Exercise 1 - Films - - - - - - - - - - - - - - - 

// let films = ["Heat", "Moon", "Airplane", "Ghostbusters", "Alien"];

// films.push("Bladerunner", "Inception");
// console.log(films)

// for (let i = 0; i < films.length; i++){
//     console.log(films[i]);
// }

// Activity 2 RNG - - - - - - - - - - - - - - 

// for (i=0; i<6; i++){ // start with a value of 0 for the numbers, with a maximum of 6 printed numbers, and increment on each iteration
//     console.log(Math.floor(Math.random() * 50+1)); // we round down any randomness created so its an integer, and multiply by 50 to get the max number allowed 1 - 50
// };

// Activity 3 Countdown - - - - - - - - - - - - - - 

// let countdown = []; // starting value blank
// for (countdown = 9; countdown >=0; countdown--){ // decide the starting point (9), the end point (0) and what to do to get there (count down by one each iteration)
//     console.log(countdown);
// }

// Activity 4 Ghosty - - - - - - - - - 

// let films = ["Heat", "Moon", "Ghostbusters", "Airplane"];

// if ((films[2]) == "Ghostbusters"){
//     console.log("Yay it's Ghostbusters");
// }
// else {
//     console.log("Boo! we want Ghostbusters")
// }

// Activity 5 - RNG 6x30 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let nums = [];  // Again we start on nothing so as to not influence
// for (i=0; i<6; i++){    // the usual start at 0, do until 6, increase by 1 each time
//     let nums = Math.floor(Math.random() * 30 + 1)       // we tell it that nums will now accept the randomized value from i, also we set it to a cap of 30 + 1 (to avoid 0s)
//     console.log(nums) // we print the randomized numbers 
//     if (nums % 7 === 0){   // use this to check if its divisible or not, and add a message depending on outcome
//         console.log("This is divisible by 7");
//     }
//     else {
//         console.log("Not divisible");
//     }
// };

// version 2, no need to use an external function as it all happens inside anyways, the printout will be inline

// for (i=0; i<6; i++){ 
//     let i = Math.floor(Math.random() * 30 + 1)
//     if (i % 7 === 0){
//         console.log(`${i} is divisible by 7`);
//     }
//     else {
//         console.log(`${i} isn't divisible`);
//     }
// };

// Activity 6 - Matching Followers -  - - - - - - - - - - - - - - - - - - - - - - - - 

// let bobsFollowers = ["Anna", "Barbara", "Claire", "Donna"];
// let hannahsFollowers = ["Donna", "Eric", "Fred", "George"];

// for (i = 0; i < bobsFollowers.length; i++){
//     for (j = 0; j < hannahsFollowers.length; j++){
//         if (bobsFollowers[i] === hannahsFollowers[j]){
//             console.log(bobsFollowers[i]);
//         }
//     }
// }

// Alternative way = = = = = = 

// let bobsFollowers = ["Anna", "Barbara", "Claire", "Donna"];
// let hannahsFollowers = ["Donna", "Eric", "Fred", "George"];
// let match = [];

// for (i = 0; i < bobsFollowers.length; i++){
//     for (j = 0; j < hannahsFollowers.length; j++){
//         if (bobsFollowers[i] === hannahsFollowers[j]){
//             match.push(bobsFollowers[i]);
//             console.log(match);            
//         }
//     }
// }

// Activity 7 Do while - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let result = "";
// let i = 0;   

// do {
//   i = i + 1; // each time it runs add 1
//   result = result + i; // this will be updated as i gets updated
// } while (i < 5); // run until i reaches 5
// console.log(result); 

// for loops - - good to use when you know exactly how many loops are required and you can control the increments
// while loops - - good to use when you DON'T know how many iterations are needed so you require it to keep checking for the closing condition
// do while loops - - kind of similar to while loops but it is guaranteed to run once as you need the increment and closing condition within it



