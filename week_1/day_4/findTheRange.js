// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

// let l = array.length;
// let max = -Infinity;
// let i;
// for (i = 0; l > i; i++) {
//     if (array[i] > max) {
//         max = array[i]
//     }
// }

// console.log(max)

let smallest = array[0]
let largest = array[0]

for (let i = 0; i < array.length; i++) {
  if (smallest > array[i]) {
    smallest = array[i]
  } else if (largest < array[i]) {
    largest = array[i]
  }
}

console.log(smallest, largest)