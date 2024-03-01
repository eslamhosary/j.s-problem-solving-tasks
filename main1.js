// Task 1
// making function preview me my first and last name

// inputs => firstName , lastName
// algorithm => firstName+lastName
// outputs   => firstName and lastName

// inputs

function myName(firstName, lastName) {
  // algorithm

  let fullName = firstName + " " + lastName;

  // output

  return fullName;
}
console.log(myName("islam", "ibrahim"));









// task 2
// making a function to git the max number of array

// input

// algorithm

// outputs => the max number of array

let AllNumber = [50, 99, 150, 360, 1169, 5987, 9000];
function maxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxNumber(AllNumber));







// task 3
// making a function to git the min number of array

let studentNumbers = [50,250,60,70,99,34,164];

function minName ( arr) {

let min = arr[0];
for ( let i =1  ; i < arr.length ; i++  ){

if ( arr[i] < min){

    min = arr[i];
}

}
return min



}
console.log( minName(studentNumbers));





// You are given a string. Your task is to count the number of vowels (a, e, i, o, u) in the string.

// Requirements:
// Implement a JavaScript function called countVowels that takes a string as input.
// The function should return the count of vowels (case-insensitive) in the string.
// Example:
// console.log(countVowels("Hello, World!")); // Output: 3
// console.log(countVowels("This is a test sentence.")); // Output: 7
// Your challenge is to implement the countVowels function to count the number of vow

// input ( "string")

// algorithm

// number of vowels

function countVowels(str) {
  if (str !== "string" ) return "you should enter letters only" ;
  const vowels = ["a", "e", "i", "o", "u"];
  let finalString = str.toLowerCase();
  // console.log(finalString);
  let vowelsCount = 0;
  for (let char of finalString) {
    // console.log(char);
    if (vowels.includes(char) ){
      vowelsCount++  
    }
  }
  return vowelsCount
}
console.log(countVowels(51507));





let numbers =[1,2,3,4,5,6,7,8,9];

function filterOddNumbers(arr) {
  let oddNumbers = arr.filter(function (value) {
      return value % 2 !== 0
  })
  return oddNumbers
}
console.log(filterOddNumbers(numbers));








let number =[1,2,3,4,5,6,7,8,9];

function filterevenNumbers(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(" you must put Array" );

  } 
  if(arr.length === 0 ){
    throw new Error("you must enter any element in the Array")
  }
  if(!arr.every(function(value){
    typeof(value) === "number"

  } )){
    throw new Error("you must enter Numbers only")

  }
  let evenNumbers = arr.filter(function (value) {
      return value % 2 == 0
  })
  return evenNumbers
}
console.log(filterevenNumbers([12,45,12,"ghgh",54]));









