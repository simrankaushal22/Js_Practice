// 1 1. Reverse a string (without built-in)

function reverse(str) {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return rev;
}
// console.log(reverse("hello"));

// 2 2. Check if a string is palindrome

// function palindrome(str){
//     let orignal=str
//     let rev = ""
//     for(let i =str.length -1;i>=0;i--){
//     rev=rev+str[i]

//     }
//     return rev===orignal
// }
// console.log(palindrome("madam"));

// 3 3. Count vowels in a string

// function vowels(str){
// let count=0;
// for(let i=str.length -1;i>=0;i--){

//     if("aeiouAEIOU".includes(str[i]))
//     // if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u")
// {
//      count++
//     }
// }
// return count

// }
// console.log(vowels("simranu"));

function vowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if ("aeiouAEIOU".includes(str[i])) {
      count++;
    }
  }
  return count;
}
// console.log(vowels("simran"));

function consonants(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] !== "a" &&
      str[i] !== "e" &&
      str[i] !== "i" &&
      str[i] !== "o" &&
      str[i] !== "u"
    ) {
      count++;
    }
  }
  return count;
}
// console.log(consonants("simran"));

// 5 5. Remove all spaces from string

function space(str) {
  let rev = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      rev = rev + str[i];
    }
  }
  return rev;
}
// console.log(space("hello hopw are u"));

// 6 6. Find length of string (without .length)

function length(str) {
  let rev = 0;
  while (str[rev] !== undefined) {
    rev++;
  }
  return rev;
}
// console.log(length("hello"));

// 7 7. Find first non-repeating character
function repeating(str) {
  for (let i = 0; i < str.length; i++) {
    // 👆 pick each character one by one

    let count = 0;
    // 👆 reset counter for each character

    for (let j = 0; j < str.length; j++) {
      if (str[j] === str[i]) {
        count = count + 1;
      }
    }
    // 👆 go through whole string and count
    // how many times current character appears

    if (count === 1) {
      return str[i];
    }
    // 👆 if it appeared only once — it's our answer!
  }
}
// console.log(repeating("hheeloi"));


//9. Find duplicate characters in string

function duplicate(str){
  let result=""
 for(let i= 0;i<str.length;i++){
  let count=0

  for(let j=0;j<str.length;j++){
    if(str[j]===str[i]){
      count ++
    }
  }
  if(count>1){
    return result+str[i]
  }
}
return result
}
// console.log(duplicate("hheelloo"));



