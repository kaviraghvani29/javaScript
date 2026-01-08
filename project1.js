console.log("1st program");

let marks = 82;

if(marks <= 100 && marks >= 90){
    console.log("Grade A");
}else if (marks >= 75){
    console.log("Grade B");
}else if (marks >= 50){
    console.log("Grade C");
}else {
    console.log("Fail");
}

console.log("2nd program");


let n = 20, x = 0, y = 1;
console.log(x, y);

for (let i = 2; i < n; i++){
    let z = x + y;
    console.log(z);
    x = y;
    y = z;
}

console.log("3rd program");

let a = 10;
let b = 5;
let choose = 3; 
// 1 = Addition, 2 = Subtraction ,3 = Multiplication, 4 = Division

switch (choose) {
    case 1:
        console.log("Addition =", a + b);
        break;
    case 2:
        console.log("Subtraction =", a - b);
        break;
    case 3:
        console.log("Multiplication =", a * b);
        break;
    case 4:
        console.log("Division =", a / b);
        break;
    default:
        console.log("Invalid choice");
}

console.log("4th program");

let p = 3;

switch (p) {
    case 1: console.log("Success");
    break;
    case 2: console.log("Wrong old password"); 
    break;
    case 3: console.log("Password too short"); 
    break;
    case 4: console.log("Passwords do not match"); 
    break;
}

console.log("5th program");

let result = "";

for (let i = 2; i <= 50; i += 2) {
    result += i + " ";
}

document.getElementById("out").innerHTML = result;