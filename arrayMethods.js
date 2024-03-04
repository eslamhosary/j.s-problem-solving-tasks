// filter
// outputs => the numbers > 40

// let arr = [10,,20,30,40,50,60,70,80,90];

// let number = arr.filter(function(element){
//     return element > 40
// })
// console.log(number);






// isArray   // throw new Error



let numbers =[1,2,3,4,5,6,7,8,9];

function filterOddNumbers(arr) {
    if(!Array.isArray(arr){
        throw new Error("you must enter element array")
    })
  let oddNumbers = arr.filter(function (value) {
      return value % 2 !== 0
  })
  return oddNumbers
}
// console.log(filterOddNumbers(5464));




// lenght = 0  its mean the Array is empty




let numbers =[1,2,3,4,5,6,7,8,9];

function filterOddNumbers(arr) {
    if(arr.lenght === 0){
        throw new Error("the array is Empty")
    })
  let oddNumbers = arr.filter(function (value) {
      return value % 2 !== 0
  })
  return oddNumbers
}
// console.log(filterOddNumbers());



//every

let numbers =[1,2,3,4,5,6,7,8,9];

function filterOddNumbers(arr) {
    if(!arr.every(function())){
        typeof(value) === "number"
    }
    }){
        throw new Error("you must enter number")

    }
  let oddNumbers = arr.filter(function (value) {
      return value % 2 !== 0
  })
  return oddNumbers
}
console.log(filterOddNumbers([1,6,"5"]));




