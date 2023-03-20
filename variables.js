// let sentence = "All Around the World";
// let char = sentence.charAt(7);
// console.log(char)

// alternative ways

// console.log("All Around the World".charAt(7).toUpperCase())

// let str = "All Around the World";console.log(str[7].toUpperCase())

// console.log("All around the world"[7].toUpperCase());

///  drink example - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let favDrink = "Iced Coffee"
// console.log(favDrink)

// let favDrinks = "Iced Coffee";
// console.log(`My favourite drink is ${favDrinks}`) 

// the tilde here does the same as "" BUT! it allows for ${} to be
// used and the variable is pulled into the string honouring the spaces instead of messing with "" + ""

// 
// Activity 1 personal details - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let name1 = "Timmy";
// let age = "50";
// let colour = "red"
// console.log(`${name1} got a ${colour} car for his ${age}th birthday`)

// // I think this is what the stretch is asking? 

// name1 = "john";
// age = "45";
// colour = "green";
// console.log(`${name1} got a ${colour} car for his ${age}th birthday`)

// Activity 2 diet tracker - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Base version works, stretch doesnt

// let brekkie = "toast"
// let lunch = "pasta"
// let dinner = "salad"
// console.log(`Today I had ${brekkie}, ${lunch} and ${dinner}.`)

// function tomorrow(){
//     let brekkie = "yogurt";
//     let lunch = "pizza";
//     let dinner = "fruit";
// console.log(`Tomorrow I will have ${brekkie}, ${lunch} and ${dinner}.`);
// };
// console.log(tomorrow)

// Activity 3 Date checker - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let bday = '1991-10-10'; // just a plain date, this is not changed
// let today = '2023-03-07'; // same as above
// let dayDiff = new Date(today) - new Date(bday) // this takes the dates and converts it to milliseconds as if they were plain integers being substracted
// let numDays = dayDiff / (1000 * 60 * 60 * 24); // divides ms by the numbers required to reach day units, ms - s - min - hr
// console.log(numDays)


// Activity 4 tictac (the poor man's version of tictac at least) - - - - - - - - - - - - - - - - - - - - - -

// let space1 = "X"
// let space2 = "O"
// let space3 = " "
// let space4 = "X"
// let space5 = "X"
// let space6 = " "
// let space7 = "O"
// let space8 = " "
// let space9 = " "

// console.log(`   |   |   
//  ${space1} | ${space2} | ${space3} 
//    |   |   
// ------------
//    |   |   
//  ${space4} | ${space5} | ${space6} 
//    |   |   
// ------------
//    |   |   
//  ${space7} | ${space8} | ${space9} 
//    |   |   `)
   

