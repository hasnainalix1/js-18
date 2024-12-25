// 1. default perameter

function greet(name = "Guest") {
     console.log(`Hello, ${name}!`);
    // document.write(`Hello, ${name}!`);
     };
// greet(); 
greet(prompt("Enter Your Name"));

//  worked




//  2. rest perameter

// function sum (...numbers){
//     return numbers.reduce((total, num) =>
//         total + num, 0
//     );
// };
// console.log(sum(1, 2, 3, 4, 5));

// worked



//  3. Spread Operator

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const merged = [...arr1, ...arr2];
// console.log(merged);

// worked



//  4. Veriable Scoping

// {
//     let message = "Hello";
//     console.log(message); 
//   }

//  use let and const instead of var 



//  5. Short Hand

// const name = "Ali";
//  const age = 25;
//   const person = { name, age  }; 
//   console.log(person);

//  worked




//  6. arrow function

// const greet = (name) => {
//     `hello,  ${name}!`
// };
// console.log(greet("Ali"));

//  undefined



//  7. Separate Veriable

// let name = "John ";
// let age = 25;
// let city = " New York !";
// let mixed = name + age + city;
// console.log(mixed);

//  worked 
