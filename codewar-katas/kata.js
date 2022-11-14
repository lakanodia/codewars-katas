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

// function toCamelCase(str) {
//   let newArr = [];
//   let array = str.split(/[-_]+/);
//   let firstWord = array[0];
//   let arrayTwo = array.splice(0, 1);
//   array.forEach((item, index) => {
//     let upperCaseWords = item.charAt(0).toUpperCase() + item.slice(1);
//     newArr.push(upperCaseWords);
//     return newArr;
//   });
//   let finalArray = newArr.unshift(firstWord);
//   return newArr.join("");
// }
// let res = toCamelCase("the-Stealth-Warrior");
// console.log(res);

// Challenge 4
function solution(str) {
  if (str.length % 2 == 0) {
    const evenRestult = str.match(/.{1,2}/g) || [];
    return evenRestult;
  } else {
    let newString = str.concat("_");
    let oddResult = newString.match(/.{1,2}/g) || [];
    return oddResult;
  }
}
let res = solution("lakal");
console.log(res);
