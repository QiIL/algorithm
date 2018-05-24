/**
 * 输出斐波那契数列的第n项。
 */

/**
 * @param {integer} n
 */
function Fibonacci(n) {
  if (n <= 1) {
    return n
  }
  let one = 0;
  let two = 1;
  let res = 0;
  for (let i = 2; i <= n; i++) {
    res = one + two;
    one = two;
    two = res;
  }
  return res;
}

console.log(Fibonacci(3))
console.log(Fibonacci(10))
console.log(Fibonacci(30))
console.log(Fibonacci(50))
console.log(Fibonacci(80))
console.log(Fibonacci(100))