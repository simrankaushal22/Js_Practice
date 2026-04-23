// 1. Print numbers from 1 to N
// let n = 5

// for(i=1;i<=n;i++){
//     console.log(i);

// }

// 2. Print numbers in reverse (N to 1)
// let n =1

// for(i=5;i>=n;i--){
//     console.log(i);

// }

//3. Print all even numbers up to N

// let n = 20
// for(i=1;i<=n;i++){
// if(i%2===0){
//     console.log(i);

// }

// }

//4. Find sum of first N natural numbers
// let n =30;
// let sum =0;

// for(i=1;i<=n;i++){
//     sum+=i
// }
// console.log(sum);

//5. Find factorial of a number
// let fact = 1;
// for(i=1;i<=5;i++){
// fact*=i
// }
// console.log(fact);

//6. Count digits in a number
// let n = 12345697664657;
// let count=0

// while(n>0){
//     n=Math.floor(n/10)
//     count++

// }
//  console.log(count);

//7. Reverse a number
// let n = 12345;
// let rev = 0;

// while (n > 0) {
//   let digit = n % 10;
//   rev = rev * 10 + digit;
//   n = Math.floor(n / 10);
// }
// console.log(rev);

//8.Check if a number is palindrome
// function isPalindrome(n){
//  let orignal=n;
//  let reverse=0;

//  while(n>0){

//   let sum=n%10
//   reverse=reverse*10+sum
//   n=Math.floor(n/10)
//  }
// return orignal===reverse
// }
// console.log(isPalindrome(121));
// console.log(isPalindrome(122))

// }

// let n = 1;
// for(i=5;i>=n;i--){
//   console.log(i);

// }

// let n = 10;

// for(i=1;i<=n;i++){
//   if(i%2===0){
//     console.log(i);

//   }
// }

// let n=10;
// let sum=0;

// for(i=1;i<=n;i++){
//   sum+=i;
//   }
//   console.log(sum);

// let fact =1;
// for(i=1;i<=5;i++){
// fact*=i
// }
// console.log(fact);

// let n = 1345673454
// let num=0;

// while(n>0){
// n=Math.floor(n/10)
// num++
// }
// console.log(num);

// let n = 54321
// let rev =0;

// while(n>0){
// let digit= n%10
// rev=rev*10+digit
// n=Math.floor(n/10)

// }
// console.log(rev);

// let n=12345
// let rev=0;

// while(n>0){
// let digit=n%10
// rev=rev*10+digit
// n=Math.floor(n/10)

// }
// console.log(rev);

// function reverse(n){
// let rev=0
// while(n>0){
// let digit =n%10
// rev=rev*10+digit
// n=Math.floor(n/10)
// }
// return rev
// }
// console.log(reverse(12345));

// function largest(num){

// let max=0;

// while(num>0){
//   let digit=num%10;
//   if(digit>max){
//     max=digit;
//   }
//   num=Math.floor(num/10)
// }
// return max;
// }
// console.log(largest(5432682));
// function largest(num){
// let max=0;

// while(num>0){
// let rev=num%10;
// if(rev>max){
//   max=rev
// }
// num=Math.floor(num/10)
// }
// return max
// }
// console.log(largest(1365));

function reverseNumber(num) {
  let rev = 0;

  while (num > 0) {
    let digit = num % 10;

    rev = rev * 10 + digit;

    num = Math.floor(num / 10);
  }
  return rev;
}
// console.log(reverseNumber(12345));

function sumplus(n) {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
// console.log(sumplus(23456));

function sunplus(num) {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sunplus("12345"));

function largest(num) {
  let pal = 0;
  while (num > 0) {
    let digit = num % 10;
    if (digit > pal) {
      pal = digit;
    }
    num = Math.floor(num / 10);
  }
  return pal;
}
// console.log(largest(1263));
