// let a = 10;
// function test() {
//   console.log(a);// reffrence error
//   let a = 20;
// }
// test();

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
//logical tricky questions
console.log({} + []);
console.log([] + {});
console.log(true + false);
console.log(!!"false");
console.log("5" + "2");

// regural function
function great() {
  console.log("hello simran");
}
great();
             
// IIFE
(function () {
  console.log("hello simran");
})();
