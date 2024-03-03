// Array reduce
// How to calculate the Avreage

const students = [
  {
    id: 1,
    name: "Ahmed",
    score: 80,
  },
  {
    id: 2,
    name: "Mazero",
    score: 90,
  },
  {
    id: 3,
    name: "Elham",
    score: 100,
  },
  {
    id: 4,
    name: "Osama",
    score: 70,
  },
  {
    id: 5,
    name: "Gamal",
    score: 85,
  },
];

// inputs => Array contain 5 objects
// algorithem => Average = totalScore / Number of students
// outputs => Aerage of Degree

// let studentNumbers = students.length;

// let totalDegree = students.reduce(function (prev, current) {
//   return prev + current.score;

// },0);
//  let Avreage = totalDegree / studentNumbers

//  console.log(`${Avreage}%`);

const customers = [
  {
    id: 1,
    name: "Ahmed",
    score: 20,
  },
  {
    id: 2,
    name: "Mazero",
    score: 90,
  },
  {
    id: 3,
    name: "Elham",
    score: 100,
  },
  {
    id: 4,
    name: "Osama",
    score: 70,
  },
  {
    id: 5,
    name: "Gamal",
    score: 85,
  },
  {
    id: 6,
    name: "islam",
    score: 95,
  },
];

// inputs => elements of array
// algorithm =>  Aerage = totalDegree / customerNumber
// outputs => Average

//   let customerNumbers = customers.length
// //   console.log(customerNumbers);

// let totalDegree = customers.reduce(function(value1 ,value2){
//     let finalScore = value1 + value2.score
//     return finalScore
// },0)

// let Average = totalDegree / customerNumbers
// console.log(`${Average}%`);

const customer = [
  {
    id: 1,
    name: "Ahmed",
    score: 4,
    target: 2,
  },
  {
    id: 2,
    name: "Mazero",
    score: 4,
    target: 2,
  },
  {
    id: 3,
    name: "Elham",
    score: 4,
    target: 2,
  },
  {
    id: 4,
    name: "Osama",
    score: 4,
    target: 2,
  },
  {
    id: 5,
    name: "Gamal",
    score: 4,
    target: 2,
  },
  {
    id: 6,
    name: "islam",
    score: 4,
    target: 2,
  },
];

// let customerNumbers = customer.length;

// let totalDegree = customer.reduce(function (num1, num2) {
//   let finalScore = num1 + num2.score + num2.target;
//   console.log(finalScore);
//   return finalScore;
// }, 0);

// // let Average = totalDegree / customerNumbers;
// // console.log(`${Average}%`);

let partner = [
  {
    id: 1,
    name: "Ahmed",
    score: 40,
    target: 75,
  },
  {
    id: 2,
    name: "Mazero",
    score: 90,
    target: 80,
  },
  {
    id: 3,
    name: "Elham",
    score: 45,
    target: 90,
  },
  {
    id: 4,
    name: "Osama",
    score: 70,
    target: 60,
  },
  {
    id: 5,
    name: "Gamal",
    score: 50,
    target: 70,
  },
  {
    id: 6,
    name: "islam",
    score: 95,
    target: 80,
  },
];

//   let number = partner.length
// //   console.log(number);

// let totalScore = partner.reduce(function(prev , curr){
//     let finalTotal = prev + curr.score + curr.target ;
//     return finalTotal

// } ,0)

// let average = totalScore / number
// console.log(`${average}%`);

const studentss = [
  {
    id: 1,
    name: "Ahmed",
    score: 80,
  },
  {
    id: 2,
    name: "Mazero",
    score: 90,
  },
  {
    id: 3,
    name: "Elham",
    score: 100,
  },
  {
    id: 4,
    name: "Osama",
    score: 70,
  },
  {
    id: 5,
    name: "Gamal",
    score: 85,
  },
];

// average

let numbers = studentss.length;

let totalDegree = studentss.reduce(function (prev, current) {
  let finalScore = prev + current.score;
  console.log(finalScore);
  return finalScore;
}, 0);

let average = totalDegree / numbers;
console.log(`${average}%`);
