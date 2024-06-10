// Understanding Data Types in JavaScript
// Task 1: Declare variables to represent student information such as name, age, grade, and attendance status.
let studentName;
let studentAge;
let studentGrade;
let studentAttendance;


// Task 2: Assign sample values to the student information variables.
studentName = "Jason";
studentAge = 17;
studentGrade = "B";
studentAttendance = "present";


// Task 3: Display the student information using console.log() statements.
console.log(studentName);
console.log(studentAge);
console.log(studentGrade);
console.log(studentAttendance);


// Exploring JavaScript Operators
// Task 1: Declare variables to store two numeric values for performing arithmetic operations.
let num1;
let num2;

// Task 2: Assign sample numeric values to the variables declared in Task 1.
num1 = 2;
num2 = 5;

// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// Task 4: Explore assignment operators and update the values of variables.
num1 += 5; 
num2 *= 2; 

console.log("Updated num1 after addition:", num1);
console.log("Updated num2 after multiplication:", num2);

// Task 5: Use comparison operators to compare the values of variables.
console.log("Is num1 equal to num2?", num1 === num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 less than num2?", num1 < num2);
console.log("Is num1 not equal to num2?", num1 !== num2);
console.log("Is num1 less than or equal to num2?", num1 <= num2);
console.log("Is num1 greater than or equal to num2?", num1 >= num2);

// Task 6: Apply logical operators to combine conditions and display the results.
let isNum1Positive = num1 > 0;
let isNum2Positive = num2 > 0;

console.log("Is num1 positive?", isNum1Positive);
console.log("Is num2 positive?", isNum2Positive);
console.log("Are both numbers positive?", isNum1Positive && isNum2Positive);

let isNum1Even = num1 % 2 === 0;
let isNum2Even = num2 % 2 === 0;

console.log("Is num1 even?", isNum1Even);
console.log("Is num2 even?", isNum2Even);
console.log("Is at least one number even?", isNum1Even || isNum2Even);