// 1. Print "Hello World"

let a = "hello World";
// console.log(a);

// 2. Add two numbers
function add(a, b) {
  return (a, b);
}
// console.log(add(2,5));

// 3. Check even or odd

function oddEven(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
// console.log(oddEven(5));
// console.log(oddEven(4));

// 4. Find largest of 3 numbers

function largest(a, b, c) {
  if (a > b && a > c) {
    return "a is largest";
  } else if (b > a && b > c) {
    return "b is largest";
  } else {
    return "c is largest";
  }
}
// console.log(largest(2,4,6));

// 5. Reverse a string

function reverse(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return rev;
}
// console.log(reverse("12345"));

// 6. Count vowels in a string

function vowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
// console.log(vowels("simran"));

// 7. Factorial of a number

function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
// console.log(factorial(5));

// 9. Check palindrome (string)

function palindrome(str) {
  let orignal = str;
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return rev === orignal;
}
// console.log(palindrome("madam"));

// 10. Sum of array elements

function array(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
// console.log(array([1,2,3,45,5]));

//11. Find max in array

function maximum(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(maximum([1,2,5,7,3]));

// 12. Remove duplicates from array

function duplicate(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr[i]) {
        found = true;
      }
    }
    if (!found) {
      result[result.length] = arr[i];
    }
  }
  return result;
}
// console.log(duplicate([12, 4, 4, 5, 7, 2, 5, 2]));

//13. Sort array (ascending)

// function sorting(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(sorting([7, 6, 3, 2, 1, 5, 4]));
//

function sorting(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(sorting([3,4,6,8,1,2,3]));

function duplicate(arr) {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(duplicate([2,4,6,8,5,2,5]));

// 14. Merge two arrays
function merge(arr1,arr2){
let result=[]

for(let i=0;i<arr1.length;i++){
result[result.length]=arr1[i]
}
for(let i=0;i<arr2.length;i++){
  result[result.length]=arr2[i]
}
return result
}
console.log(merge([1,2,3,4,5],[6,7,8,9,10]));

function merge(arr1, arr2){
  return arr1.concat(arr2)
}
console.log(merge([1,2,3], [4,5,6])); 


 function merge(arr1,arr2){
result=[]

for(let i=0;i<arr1.length;i++){
  result[result.length]=arr1[i]
}

}