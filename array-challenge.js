const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = [];
let odd = [];

arr.forEach(num => {
    if (num % 2 === 0) {
        even.push(num);
    } else {
        odd.push(num);
    }
});

console.log("EVEN NUMBERS:");
even.forEach(num => {
    console.log(num);
});

console.log("ODD NUMBERS:");
odd.forEach(num => {
    console.log(num);
});