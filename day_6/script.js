// 6. Find length of string (without .length)
function length(str) {
  let len = 0;
  for (element of str) {
    len++;
  }
  return len;
}
// console.log(length("simran"));

// 7. Find first non-repeating character
function nonRepeating(str) {
  for (let i = 0; i < str.length; i++) {
    let nonrep = "";

    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        nonrep++;
      }
    }
    if (nonrep === 1) {
      return str[i];
    }
  }
  return null;
}
// console.log(nonRepeating("ssham"));

// 8. Check if two strings are anagrams

function anagrams(str1,str2){

    if(str1.length!==str2.length){
        return false
    }
    for(let i=0;i<str1.length;i++){
        let count1=0;
        let count2=0
        for(let j=0;j<str2.length;j++){
            if(str1[j]===str1[i]) count1++
            if(str2[j]===str1[i]) count2++
        }
        if(count1!==count2){
            return false
        }
    }
    return true
}
// console.log(anagrams("sim","mis"));

// 9. Count duplicate characters in string

function duplicate(str){
    let count={}
    let result=""

    for(let i=0;i<str.length;i++){
        count[str[i]]=(count[str[i]]||0)+1
    }
    for(let key in count){
        if(count[key]>1)result +=key
    }
    return result
}
console.log(duplicate("siimrann"));


