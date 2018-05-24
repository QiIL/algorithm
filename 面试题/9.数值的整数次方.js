/**
 * 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
 */

/**
 * 思路：
 * 1.需要考虑情况
 * （1）指数为0，什么底数结果都是1
 * （2）指数为负数，求出的应该是其幂的倒数
 * （3）指数为负数时，底数不能为0
 * 通过位运算减少乘法次数
 * 例子为：10^1101 = 10^0001*10^0100*10^1000
 */

function powerNomal(base, e) {
  if (e === 0) {
    return 1;
  }
  if (e === 1) {
    return base;
  }
  let res = 1;
  let temp = base;
  while (e !== 0) {
    // 如果末位不等于0
    if ((e & 1) === 1) {
      res *= temp
    }
    // 移位之后要翻倍
    temp *= temp;
    e >>= 1;
  }
  return res;
}

console.log(powerNomal(10, 13))