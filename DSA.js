let arrryyy = [1, 2, 3, 5, 2, 4, 5, 7, 9, 10, -1];

let largest = Math.max(...arrryyy);
let smallest = Math.min(...arrryyy);

console.log("Largest number:", largest);
console.log("Smallest number:", smallest);

let ascending = [...arrryyy].sort((a, b) => a - b); // Use arrryyy here
let descending = [...arrryyy].sort((a, b) => b - a); // Use arrryyy here

console.log("Ascending order:", ascending);
console.log("Descending order:", descending);