console.log('Practice Questions');
console.log("Q1 - add 29.02 + 28.03 , Output should be 57.05")
console.log(29.02 + 28.03);

console.log('Q2 - add 29.02 + 28.03 + 26.10 + 25.17 + 24.15 , Output should be 132.47');
console.log(29.02 + 28.03 + 26.10 + 25.17 + 24.15);

console.log('Q3 - add 20.95 + 7.99 , Output should be 28.94');
console.log(20.95 + 7.99);
console.log("to fix this issue we can take our approach to fix the decimal issue")
console.log((20.95 * 100 + 7.99 * 100) / 100);

console.log("Q4 - add .1 + .2 , Output should be 0.3")
console.log(.1 + .2);
console.log("to fix this issue we can take our approach to fix the decimal issue")
console.log((.1 * 10 + .2 * 10) / 10);

console.log("Q5 - add 20.95 + 7.99 , Output should be 28.94")
console.log(Math.round((2095 + 799) * 0.1) / 100);
console.log(((2095 + 799) * 0.1) / 100);
console.log('At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5. Use JavaScript to calculate the cost of the order.')
console.log((1*3)+(3*8)+(1*5));
console.log('Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each).')
console.log(18.50 + (2*7.50));
console.log(33.5*.1)

console.log('$'+(20.95+7.99))
console.log('$'+(20.95+7.99).toFixed(4)) // toFixed() method formats a number using fixed-point notation.
console.log(`loda le'le` + 1)
console.log('hello \nji')
console.log('hello \tji')   
console.log('hello \bji')
console.log('hello \fji')

console.log('EXAMPLE OF CONCATENATION')
console.log('TOTAL COST: $' + (5 + 3))

console.log('EXAMPLE OF INTERPOLATION')
console.log(`TOTAL COST: $${5 + 3}`)

// Concatenation (Hard to read)
let name = "Alice";
let items = 3;
let price = 10;
console.log("Hello, " + name + "! You bought " + items + " item(s) for a total of $" + (items * price) + ".");

// Interpolation (Much easier to read)
console.log(`Hello, ${name}! You bought ${items} item(s) for a total of $${items * price}.`);