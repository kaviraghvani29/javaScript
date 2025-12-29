console.log("Hello Sir!");

let user: string = "i'm Kavita";
console.log(user);

console.log("My 1st TypeScript Program");

function num(){
    let num: number = 27122025;
    console.log(num);
}
num();

console.log("My 2nd TypeScript Program");

function fullName(){
    let fullName: string = "Kavita Raghvani";
    console.log(fullName);
}
fullName();

console.log("My 3rd TypeScript Program");

function addNumbers(){
    let a: number = 10;
    let b: number = 20;
    let sum: number = a + b;
    console.log("Total is: " + sum);
}
addNumbers();

console.log("My 4th TypeScript Program");

let a: number = 10;
let b: number = 20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log("My 5th TypeScript Program");

let n: number = 5;
if(n % 2 == 0){
    console.log("number is even");
}
else{
    console.log("number is odd");
}

console.log("My 6th TypeScript Program");

let c: number = -5;
if(c < 0){
    console.log("number is negative");
}
else if(c > 0){
    console.log("number is positive");
}
else{
    console.log("number is zero");
}

console.log("My 7th TypeScript Program");

let x: number = 5;
let y: number = 8;

console.log("largest number is:", x > y ? x : y);

console.log("My 8th TypeScript Program");

let year = 2025;
if (year % 4 ==0){
    console.log("Its is Leap year");
}
else{
    console.log("Its not a Leap year");
}
 
console.log("My 9th TypeScript Program");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("My 10th TypeScript Program");

let t: number = 5;
for (let i = 1; i <= 10; i++) {
  console.log(t + " x " + i + " = " + (t * i));
}

console.log("My 11th TypeScript Program");

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

console.log("My 12th TypeScript Program");

function square(n1: number){
    return n1 * n1;
}
console.log("Square of 5 is: " + square(12));

console.log("My 13th TypeScript Program");

let str1: string = "hello";
console.log(str1.split("").reverse().join(""));

console.log("My 14th TypeScript Program");

let fruits: string[] = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => {
    console.log(fruit);
});

console.log("My 15th TypeScript Program");

let message: string = "hello typescript 15th program";
console.log(message.toUpperCase());

console.log("My 16th TypeScript Program");

let car = { brand: "Tata", year: 2025 };
console.log("brand" in car);

console.log("My 17th TypeScript Program");

let student = {
    id: 1,
    studentName: "Kavita",
    marks: 89
};
console.log(student.id);
console.log(student.studentName);
console.log(student.marks);

console.log("My 18th TypeScript Program");

let basicSalary: number = 20000;
let hra2 : number = 5000;
let da2: number = 3000;
let totalSalary = basicSalary + hra2 + da2;
console.log("Total Salary =", totalSalary);

console.log("My 19th TypeScript Program");

let basic: number = 25000;
let hra1 = basic * 0.20;   
let da1 = basic * 0.10;    
let grossSalary = basic + hra1 + da1;
console.log("Gross Salary =", grossSalary);

console.log("My 20th TypeScript Program");

let marks: number[] = [60, 70, 80];
let total = 0;
for (let m of marks) {
  total += m;
}
console.log("Total Marks =", total);






