// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3 // true
//     - 4 >= 3 // false
//     - 4 < 3 // false
//     - 4 <= 3 // false
//     - 4 == 4 // true
//     - 4 === 4 // true
//     - 4 != 4 // false
//     - 4 !== 4 //     - 4 != '4' // false
//     - 4 != '4' // false
//     - 4 == '4' // true
//     - 4 === '4' // false
//     - Find the length of python and jargon and make a falsy comparison statement.

const results = {
  "4 > 3": 4 > 3, // true
  "4 >= 3": 4 >= 3, // true
  "4 < 3": 4 < 3, // false
  "4 <= 3": 4 <= 3, // false
  "4 == 4": 4 == 4, // true
  "4 === 4": 4 === 4, // true
  "4 != 4": 4 != 4, // false
  "4 !== 4": 4 !== 4, // false
  "4 != '4'": 4 != '4', // false
  "4 == '4'": 4 == '4', // true
  "4 === '4'": 4 === '4', // false
};
const pythonLength = "python".length; // 6
const jargonLength = "jargon".length; // 6
const falsyComparison = pythonLength !== jargonLength; // false