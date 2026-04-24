//1 1. Find largest element in array

function array(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(array([2,5,7,987,3]));

// 2 2. Find smallest element

function largest(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
//  console.log(largest([6,3,6,8,1]));

function secondLargest(arr) {
  let first = arr[0];
  let second = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second;
}
// console.log(secondLargest([2,3,4,5,6]));

// 4 4. Remove duplicates from array

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
// console.log(duplicate([2, 3, 4, 5, 1, 2, 3, 5, 6]));

//5 5. Reverse an array (without .reverse())

function reverse(arr) {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev[rev.length] = arr[i];
  }
  return rev;
}
// console.log(reverse([1,2,3,4,5]));

function arr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
// console.log(arr([1, 2, 3, 4, 5]));

// 7. Count even and odd numbers

function oddEven(arr) {
  let odd = [];
  let even = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even[even.length]=arr[i]
    } else if (arr[i] % 2 !== 0) {
      odd[odd.length]=arr[i];
    }
  }
  return { odd, even };
}
console.log(oddEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 8. Move all zeros to end

function moveZero(arr){
  let result =[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
          result[result.length] = arr[i]
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            result[result.length]=arr[i]
        }
    }
    return result
}
console.log(moveZero([1,2,0,5,7,0,2,3,0,8]));
