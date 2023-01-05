console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i)
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let a = 1; a < 100; a++){
    if ((a % 3 == 0) && (a % 5 == 0)){
        console.log(`${a}: `, "FIZZBUZZ")
    } else if (a % 3 == 0){
        console.log(`${a}: `, "FIZZ");
    } else if (a % 5 == 0){
        console.log(`${a}: `, "BUZZ");
}
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let i = 0;
while (i <= 99) {
    i++;
    if (i % 2 == 1) {
    console.log(i);
    }
}

i = 0;
do { 
    i++;
    if (i % 2 == 1) {
    console.log(i);
    }
} while (i <= 99)


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++){
    if (value === i){
        console.log(`${i}: `,'Found value!');
        break;
        }
   if (i === n){
    console.log(`${i}:`, 'Did not find value.');
   }

}



// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log("i is", `${i}`);
console.log("n is", `${n}`);
console.log("fizzDivisor is", `${fizzDivisor}`);
console.log("buzzDivisor is", `${buzzDivisor}`);
console.log("start is", `${start}`);


for (let i = start; i <= n; i++)
{
    if ((i % fizzDivisor == 0) && (i % buzzDivisor == 0))
    {
        console.log(`${i}: `, "FIZZBUZZ")
    } else if (i % fizzDivisor == 0){
        console.log(`${i}: `, "FIZZ");
    } else if (i % buzzDivisor == 0){
        console.log(`${i}: `, "BUZZ")
    }
}