/**
 * 题目：
 * 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 
 * 输入：
 * array： 待查找的二维数组 
 * target：查找的数字
 * 输出：
 * 查找到返回true，查找不到返回false
 */

/**
 * 思路：
 * 从右上脚或者左下角开始，以右上角为例若是数组元素大于target那么该列可以去掉，因为下面的都比target大
 */

/**
 * @param {Array} array 目标数组
 * @param {number} target 查找的数字
 */
function findTarget(array, target) {
  let minusLength = 0;
  for (let subArray of array) {
    const maxLength = subArray.length - minusLength
    for (let i = maxLength; i > 0; i--) {
      if (subArray[i] === target) {
        console.log('i = ', i, 'minusLength = ', minusLength)
        return true;
      } else if (subArray[i] > target) {
        minusLength += 1;
      } else {
        for (let col of array) {
          if (col[i] === target) {
            console.log('lala,i = ', i, 'minusLength = ', minusLength)
            return true;
          } else if(col > target) {
            break;
          }
        }
      }
    }
  }
  return false
}

const array = [
  [1, 3, 4, 5, 8], 
  [2, 4, 5, 6, 9], 
  [3, 5, 6, 8, 12],
  [4, 6, 7, 9, 14]
]

const target = 7

console.log(findTarget(array, target))