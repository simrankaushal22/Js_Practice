// 1. Reverse a string (without built-in)
//  function reverse(str){
//   let rev=""
//   for(let  i=str.length-1;i>=0;i--){
//     rev=rev+str[i]
//   }
//   return rev
//  }
//  console.log(reverse("simran"));

// 2. Check if a string is palindrome

// function palindrome(str){
//     let orignal=str
//     let rev=""
//     for(let i=str.length-1;i>=0;i--){
//         rev=rev+str[i]
//     }
// return orignal===rev
// }
// console.log(palindrome("simran"));
// console.log(palindrome("madam"));

// 3. Count vowels in a string

// function vowels(str) {
//   let vow = "";

//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       // vow=vow+str[i]
//       vow++;
//     }
//   }
//   return vow;
// }
// console.log(vowels("simran"));


// 4. Count consonants in a string
// function consonants(str){
//     let cons=""
//     for(let i=0;i<str.length;i++){
//         if(str[i]!=="a"&&
//             str[i]!=="e"&&
//             str[i]!=="i"&&
//             str[i]!=="o"&&
//             str[i]!=="u"
//         ){
//             cons++
//         }
//     }
//     return cons
// }
// console.log(consonants("simran"));

// 5. Remove all spaces from a string

// function spaces(str){
//     let space=""
//     for(let i=0;i<str.length;i++){
//      if(str[i]!==" "){
//         space=space+str[i]
//      }
//     }
//     return space
// }
// console.log(spaces("hi how are u"));

// 6. Find length of string (without .length)

// function length(str){
//     let len=0
//  for(element of str){
//     len++
//  }
//  return len
// }
// console.log(length("simran"));


// 7. Find first non-repeating character

// function nonRepeating(str){

//     for(let i=0;i<str.length;i++){
//         let rep=0

//         for(let j=0;j<str.length;j++){
//          if(str[i]===str[j]){
//             rep++
//          }
//         }
//         if(rep===1){
//             return str[i]
//         }
//     }
//   return null
// }
// console.log(nonRepeating("simmran"));

// function nonRepeating(str){
//     let freq = {};

//     for(let char of str){
//         freq[char] = (freq[char] || 0) + 1;
//     }

//     for(let char of str){
//         if(freq[char] === 1){
//             return char;
//         }
//     }

//     return null;
// }

// console.log(nonRepeating("simmran")); // s

// 8. Check if two strings are anagrams

