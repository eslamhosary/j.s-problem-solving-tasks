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









task 2
making a function to git the max number of array

input
let AllNumber = [50, 99, 150, 360, 1169, 5987, 9000];

// algorithm

// outputs => the max number of array

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

