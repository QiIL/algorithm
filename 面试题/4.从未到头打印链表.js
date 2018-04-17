/**
 * 输入一个链表，从尾到头打印链表每个节点的值。
 */

/**
 * 思路：
 * 1. 用栈保存后输出
 * 2. 用递归方式（js实现这个就算了）
 */

/**
 * @param {Array} array
 * @param {number} length
 */
function printLink(array, length = 0) {
  if (array[length+1]) {
    printLink(array, length+1)
    console.log(array[length])
  } else {
    console.log(array[length])
    return
  }
}

const array = [1,2,3,4,5,76,234]

printLink(array, 0)