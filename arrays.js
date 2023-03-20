// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's New"
// ];
// console.log(coffeeOrder);

// Array value can be updated - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let coffeeOrder2 = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's New"
// ];
// coffeeOrder2[1] = "Ann - Vanilla Latte";
// console.log(coffeeOrder2);

// Array Properties - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// length gives you the number of items in the array - - - - - - - - - - - - 
// let coffeeOrder2 = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's New"
// ];
// console.log(coffeeOrder2.length);

// push gives you the ability to add items to an array instead of replacing items in the array - - - - - - 
// let coffeeOrder2 = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's New"
// ];
// coffeeOrder2.push("Donna - Espresso");
// console.log(coffeeOrder2)

// .pop removes the last item from the array list - - - - - - - -

// let coffeeOrder2 = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's New"
// ];
// // coffeeOrder2.pop();  
// coffeeOrder2.splice(1, 1) // this one removes a specific item only, instead of a default one
// console.log(coffeeOrder2)

// Activity 1 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let songs = [
//     "Sleeping with Sirens - Complete Collapse",
//     "Architects - Deep Fake",
//     "Falling in Reverse - Voices in My Head"
// ];
// console.log(songs)

// songs.push("Ghost - Cirice", "VRSTY - Closer")

// console.log(songs)

// songs.pop(songs)
// console.log(songs)

// Activity 2 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Unshift adds the value in brackets (0) to the array at the very top/start of it and gives you the new length of array
// let num = [1, 2, 3];
// console.log(num.unshift(0));
// console.log(num)
// 4
// [ 0, 1, 2, 3 ]

// Shift removes the FIRST value of the array, returns that value on its own and changes the length of array
// let num = [1, 2, 3];
// console.log(num.shift(0));
// console.log(num)
// 1
// [ 2, 3 ]

// Slice returns a copy of elements chosen in the array, it doesn't amend it just gives you a snapshot of your selection
// let num = [1, 2, 3, 4, 5];
// console.log(num.slice(2)); // [ 3, 4, 5 ]
// console.log(num.slice(-2)); // [4, 5 ] as it starts 2 places from the end instead
// console.log(num.slice(2, 4)); // [ 3, 4 ] starts 2 in (3) then starts from the 4th (5 not included as it starts there)




