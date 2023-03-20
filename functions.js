// const pressGrindBeans = () => {
//     console.log("Grinding for 20s")
// }
// pressGrindBeans();

// - - - - - - - - - -

// let coffeeIsGrinding = false;
// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind")
//         coffeeIsGrinding = false;
//     }
//     else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }
// pressGrindBeans();

// Exa 3 - - - - - - - - - - - - - - 

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50449921);

// Exa 4 Adding - - - - - - - - - - - - - - 

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addUp(2,5));

// Exa 5 - - - - - - 

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };
// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };
// console.log("The temperature is "+ getFahrenheit(30)+"°F");

// Declaration 1  - - - - - - - - - 

// function square(number) {
//     return number * number;
// };
// console.log(square(5));

// Exp 2 - - - - - 

// const square = function(number){
//     return number * number;
// };
// console.log(square(5))

// Activity 1 - - Arrow function conversion - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)){
//         return 1;
//     } else {
//         return (n * factorial (n-1));
//     }
// }
// console.log(factorial(4));

// Activity 2 - - Code editing, 2 parameters - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let orderCount = 0;
// const takeOrder = (topping, size) => {
//   console.log(`Order ${orderCount++} - ${size} pizza with ${topping}`);
//   ++orderCount;
//   return orderCount;
// }

// takeOrder("pineapple", "small");
// takeOrder("cheese", "large");

// ACtivity 3 - - - Cash - - - - - - - - - - - - - - -

// function cashWithdrawal(pinNumber, withdrawalAmount) { 
//   let currentBalance = 654; 
//   const correctPin = 3456; 
//   if (pinNumber !== correctPin) { 
//     return ("Incorrect PIN. Try again.");
//   } 

//   if (withdrawalAmount > currentBalance) { 
//       return (`Insufficient funds, max allowance ${currentBalance}`); 
//   } 
   
//   else { 
//       return (`PIN verified, ${withdrawalAmount} withdrawn`); 
//   } 
// } 
// console.log(cashWithdrawal(1234, 600)); 
// console.log(cashWithdrawal(3456, 900)); 
// console.log(cashWithdrawal(3456, 300));