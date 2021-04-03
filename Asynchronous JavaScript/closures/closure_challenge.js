/*
1. Create createTipper which takes in the base tip (.15 for 15% tip)
2. set it up to return a function that takes in the bill amount
3. call createTipper to generate a few functions for different percentages
4. Use the generated functions to calculate tips and print them out
*/

const getTipper = (tip = 0.15) => {
  return (amountdue) => {
    return amountdue * tip;
  };
};
const person1 = getTipper();
console.log(Math.round(person1(50)));

const person2 = getTipper(0.45);
console.log(Math.round(person2(30)));

