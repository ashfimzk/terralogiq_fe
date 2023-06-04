// no 1
function fizzBuzz(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 3 === 0) {
      newArr.push("Fizz");
    } else if (num % 5 === 0) {
      newArr.push("Buzz");
    } else {
      newArr.push(num);
    }
  }

  return newArr;
}
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(fizzBuzz(array1));

// no 2
function isPalindrome(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    const newWord = word.split("").reverse().join("");

    result.push(word === newWord);
  }

  return result;
}
const array2 = ["kodok", "kadal", "radar", "lincah"];
console.log(isPalindrome(array2));

// no 3
function isDuplicate(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }
    }
    return count;
  }
  
  var array3 = [1, 2, 3, 2, 5, 4, 4, 5, 9, 8];
  console.log(isDuplicate(array3));

