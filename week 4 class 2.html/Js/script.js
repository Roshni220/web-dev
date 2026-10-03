/*function sum(x, y) {
    console.log("The sum is", x + y);
}

function product(x, y) {
    console.log("The product is", x * y);
}

function difference(x, y) {
    console.log("The difference is", x - y);
}

sum(4, 5);
product(4, 5);
difference(4, 5);*/

/*let x = 2;*/
let x = prompt('Enter any numbers to check odd or even');
let result = checkEvenOdd(x);

if (result == 0) {
    // console.log("The number is even");
    alert('The number is even')
} else {
    console.log("The number is odd");
}

function checkEvenOdd(num) {
    return num % 2;
}