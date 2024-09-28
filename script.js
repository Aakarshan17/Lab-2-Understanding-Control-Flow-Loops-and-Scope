// Step 2: If-else Condition

// Write a simple program in script.js to check if a number is positive, negative, or zero using an if-else statement.

let number = -2

if (number > 0) {
    console.log("The number is positive")
} else if (number < 0) {
    console.log("The number is negative")
} else {
    console.log("The number is 0")
}

// Step 3: Switch Statement

// Create a program that takes a number (1 to 7) and prints the corresponding day of the week.
let day = 2

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}

// Step 4: Loops (For, While, Do...While)

// Practice using loops to print numbers from 1 to 5. Implement this using for, while, and do...while loops.

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

let p = 1;
while (p <= 5){
    console.log(p);
    p++;
}

let j = 1;

do{
    console.log(j);
    j++;
} while (j <= 5);

// Step 5: Control Flow with break and continue

// Modify your loop to stop when it reaches the number 3 using break. Try skipping the number 3 with continue.

for (let i = 1; i<= 5; i++) {
    if (i === 3){
        break;
    
    }
    console.log(i)
}

for (let i = 1; i<= 5; i++) {
    if (i === 3){
        continue;
    }
    console.log(i)
}

// Step 6: Scope and Context

// Explore scope by declaring variables inside and outside functions. Test which variables you can access.

let globalVar = "I'm global!";

function scopeExample(){
    let localVar = "I'm local!";
    console.log(globalVar);
    console.log(localVar);
}

scopeExample();

console.log(globalVar);
// console.log(localVar); this didn't work, uncomment this to try, it will give an error as this is outside the scope
