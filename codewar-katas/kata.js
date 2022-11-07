// Challenge 1

// function arrayDiff(a, b) {
//   return a.filter((x) => !b.includes(x));
// }

// Challenge 2

// function sumTwoSmallestNumbers(numbers) {
//   numbers.sort(function (a, b) {
//     return a - b;
//   });
//   return numbers[0] + numbers[1];
// }

// Challenge 3

function toCamelCase(str) {
  let newArr = [];
  let array = str.split(/[-_]+/);
  let firstWord = array[0];
  let arrayTwo = array.splice(0, 1);

  array.forEach((item, index) => {
    let upperCaseWords = item.charAt(0).toUpperCase() + item.slice(1);
    newArr.push(upperCaseWords);
    console.log(newArr);
    return newArr;
  });
  let finalArray = newArr.unshift(firstWord);
  return newArr.join("");
}
let res = toCamelCase("The-Stealth-Warrior");
console.log(res);
