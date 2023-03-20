// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Capuccino",
//         "Latte",
//         "Filter Cofee",
//         "Tea",
//         "Hot Chocolate"
//     ]
// };

// Example Activity 1 - - - - - 

// const itsMe = {
//     name: "Miguel",
//     age: "31",
// };
// console.log(itsMe);

// Example 2 - - - - - - - - - 

// let offer = "none";
// let time = 1200;

// const cafe = {
//     name:"Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappiccino",
//         "Latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate",
//     ],
//     breakfastOffer: "Free croisant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer"
// };

// if (time < 1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1500) {
//     offer = cafe.lunchOffer
//     console.log(cafe.lunchOffer);
// } else {
//     console.log(cafe.noOffer);
// }

// Example Activity 2 - - - - - - - - - - - - - - - - - - - -

// let day = "friday";
// const alarm = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am",
// }
// if (day == "saturday" || day == "sunday") {
//     alarmmsg = alarm.weekendAlarm
//     console.log(alarm.weekendAlarm);
// } else {
//     alarmmsg = alarm.weekdayAlarm
//     console.log(alarm.weekdayAlarm);
// }

// Example Activity 3 - - - - - - 

// const person = {
//     songs: [
//         "Never gonna give you up",
//         "Never gonna let you down",
//         "Never gonna run around",
//         "And desert you",
//     ]
// }
// console.log(person.songs)
// // Can also call a specific line in the list
// console.log(person.songs[1])

// Example 4 - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let offer = "none";
// let time = 1200;

// const cafe = {
//     name:"Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [ "Cappiccino", "Latte", "Filter Coffee", "Tea", "Hot Chocolate"],
//     breakfastOffer: "Free croisant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",
//         openCafe () {
//             if(this.hasSpecialOffers){
//                 return "Time for a special offer!";
//             }
//         },
//     closeCafe(){
//         return "We are closed, come back tomorrow!";
//     }
// };
// console.log(cafe.openCafe());




// Activity 1 - Person sayHi - - - - - - - - - - - - - - - - - - - - - - - - - 

// const itsMe = {
//     name: "Miguel",
//     age: "31",

//     sayHi () { // this is the function that will add the text
//         console.log(`Hello, my name is ${this.name}`) // text to be printed 
//     }
// };
// itsMe.sayHi(); // this calls the function within the object to trigger


// Activity 2 - - Pet - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Way 1 - bruteforcing (works but I think its just wrong task-wise)
// const pet = {
//     name: "Toby",
//     typeOfPet: "dog",
//     age: "5",
//     colour: "golden",
// }
// eat = console.log(pet.name + " is eating");
// drink = console.log(pet.name + " is drinking");



// - - - - - Alternative way - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// const pet = {
//     name: "Toby",
//     typeOfPet: "dog",
//     age: "5",
//     colour: "golden",

//     eating () {
//         console.log( `${pet.name} is eating`);
//     },

//     drinking () {
//         console.log( `${pet.name} is drinking`);
//     },
// }
// pet.eating();


// Activity 3 - - Coffee Shop - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Attempt 1 - didnt quite work, was trying to do 2 different tasks - print the order in each line and then print the total based on array value - - - 

// const coffeeShop = {
//     branch: "HQ",
//     drinks: ["coffee", "tea", "coke"],
//     food: ["pastry", "biscuits", "eggs"],

//         // This is for the drinks order 
//     drinksOrdered () {
//         for (i = 0; i < drink.length; i++){
//             for (j = 0; j < this.drinks.length; j++){
//                 // console.log(drink[i], this.drinks[j]); // this lists both arrays side to side
//                 if (drink[i] == this.drinks[j]){
//                 console.log(`You have ordered ${drink[i]}`);
//                 }
//             }
//         }
//     },

//         // this prints the food order
//     foodOrdered () {
//         food1 = [];
//         for (i = 0; i < foodOrder.length; i++){
//             for (j = 0; j < this.food.length; j++){
//                 // console.log(drink[i], this.drinks[j]); // this lists both arrays side to side
//                 if (foodOrder[i] == this.food[j]){
//                 food1.push(foodOrder[i]);  
//                 console.log(`You have ordered ${foodOrder[i]}`);
//                 }
//             }
//         }
//     },
    

//     ordertotal () {
//         let prices = [
//             {            
//             item: "coffee",
//             price : 1,
//             },
//             {            
//             item: "tea",
//             price : 2,
//             },     
//             {            
//             item: "coke",
//             price : 3,
//             },
//             {            
//             item: "pastry",
//             price : 4,
//             },    
//             {            
//             item: "biscuits",
//             price : 5,
//             },
//             {            
//             item: "eggs",
//             price : 6,
//             },     
//         ];

        

//         for (i = 0; i < food1.length; i++){
//             for (j = 0; j < prices.length; j++){
//                 console.log(food1[i], prices[j]); // this lists both arrays side to side
//                 // if (food1 == prices[j]){
//                 //    for (let price of Object.values(prices)) {
//                 //         sum += price;
//                 //         }
//                 // console.log(sum)
//                 //     }
//             };
//         }
//             let sum = 0;
//             for (let price of Object.values(prices)) {
//               sum += price;
//             };
//     }
// };

// coffeeShop.drinksOrdered();
// coffeeShop.foodOrdered();
// coffeeShop.ordertotal();

// this bit of code adds properly so use it to reference and implement.
// let prices = {
//     "pastry": 100,
//     "biscuits": 300,
//     "eggs": 250
//   };
  
//   let sum = 0;
//   for (let price of Object.values(prices)) {
//     sum += price;
// }
// console.log(sum)


const coffeeShop = {
    branch: "HQ",
    drinksMenu: {
        "Coffee": 1.10,
        "Latte": 1.90,
        "Tea": 1.40,
        "Coke": 1.50,
        "Beer": 2.50,
    },
    foodMenu: {
        "Croissant": 1.20,
        "Biscuits": 1.50,
        "Pie": 3.00,
        "Eggs": 1.20,
        "Ice Cream": 2.40
    },

    order: {
        drinks: [],
        food: [],
    },

    drinksOrdered: function(drinkName) {
        this.order.drinks.push(drinkName);
    },

    foodOrdered: function(foodName) {
        this.order.food.push(foodName);
    },

    total: function() {
        let total = 0;
        for (const drink of this.order.drinks) {
          total += this.drinksMenu[drink];
        }
        for (const food of this.order.food) {
          total += this.foodMenu[food];
        }
        return total;
      },
      
      displayOrder: function() {
        for (const drink of this.order.drinks) {
          console.log(`${drink} (£${this.drinksMenu[drink].toFixed(2)})`);
        }
        for (const food of this.order.food) {
          console.log(`${food} (£${this.foodMenu[food].toFixed(2)})`);
        }
        console.log(`Total: £${this.total().toFixed(2)}`);
      },
    };
    
coffeeShop.drinksOrdered("Coffee");
coffeeShop.foodOrdered("Eggs");
coffeeShop.displayOrder();