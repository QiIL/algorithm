/**
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 */

/**
 * 思路：
 * 1.一个是算数右移32次，或者移动算数左移测试位然后与n做与运算，最后补上符号位
 * 2.每一次做n & (n - 1)都会使n的1的数量少一个，只需要看看做了多少次就行了
 */

function countBit (n) {
  // 做到n = 0就停止
  let count = 0;
  while (n) {
    count++;
    n = n & (n - 1)
  }
  return count;
}

console.log(countBit(1))
console.log(countBit(2))
console.log(countBit(-2147483648))
console.log(countBit(-1))