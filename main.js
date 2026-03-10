// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// let a = 0;
// for (let i = 1; i <= 10; i++) {
//   a += i;
// }
// console.log(a);

// let count = 0;
// while (count < 3) {
//   console.log("Count:", count);
//   count++;
// }

// let number = 5;
// while (number != 0) {
//   console.log(number);
//   number--;
// }

// let doValue = 0;
// do {
//   console.log("Value:", doValue);
//   doValue++;
// } while (doValue < 3);

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     i++;
//   } else if (i == 8) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 3; i++){
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }
// let a = "*";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 4; j++) {
//     console.log(a);
//     a += "*";
//   }
// }

// function sum(a, b){
//     return a + b;
// }

// console.log(sum(3, 5));

// function multiply(a, b){
//     return a * b;
// }

// console.log(multiply(9, 10));

// function sayHelloy(name) {
//     console.log(`Hello, ${name}`);
// }
// sayHelloy("ЫЫЫЫ")

// function sayHelloy(name, age) {
//     console.log(name);
//     console.log(age);
// }
// sayHelloy("ЫЫЫЫ",100)

// function calculateDiscount(price, dis = 10) {
//   discount = (price / 100) * dis;
//   price -= discount;
//   console.log(price);
//   return price;
// }
// calculateDiscount(100);

// let numberArr = [1,2,3,4,5];
// console.log(numbersARrr);

// let colors = ["a","b","c"];
// console.log(colors[0]);
// console.log(colors[colors.length-1]);
// console.log(colors);

// let students = ["Ы","ЫЫ","ЫЫЫ"];
// students.pop();
// console.log(students)

// let city = ["Москва","Волжский","Волгоград"];
// if (city.includes("Волжский")){
//     console.log(city.indexOf("Волжский"));
// }

// let user2 = {
//     name: "Ivan",
//     age: 21,
//     isStudent: true,
// };

// console.log(user2);

// let book = {
//   title: "ЫЫЫ",
//   autgor: "ЫЫЫЕ",
//   year: 1999,
// };
// console.log(book);
// book.year = 2000;
// console.log(book);

// let car = {
//     brand: "ЫЫе",
//     year: 1999,
//     getInfo: function(){
//         console.log(brand,year)
// },
// };

// car.getInfo();

let product = {
  name: "ЫЫЫ",
  count: 1000,
};
for (let key in product) {
  console.log(key + ":" + product[key]);
}
