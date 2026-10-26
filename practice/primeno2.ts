let n = 30;
let arr = [];
for (let num = 1; num <= n; num++) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        arr.push(num);
    }
}
console.log("{"+ arr +"}");
console.log(arr.length)