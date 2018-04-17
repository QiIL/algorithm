/**
 * 最长字数组和
 * 输入：
 * {1, -2, 3, 10, -4, 7, 2, -5}，
 * 输出：
 * 和最大的子数组为：｛3, 10, -4, 7, 2}。数组的和：18 。
 */

/**
 * 思路：
 * 从第一个元素开始看，{1}的和为1为最大，然后到第二个元素{1, -2}和为
 * -1, 比目前最大的和要小，所以1有可能最大，先保存该值，和保存起点的数组
 * 下标和终点的数组下标。{1, -2， 3}的和为2, 比1大但是比3小，所以意味着
 * 数组从3开始后面的和肯定比从1开始后面的和要大。所以修改最大值为3,子数组
 * 起点为2,终点为2。{3, 10}的和比3大，修改最大值，修改终点。{3, 10, -4}
 * 和比13小，终点不需要修改。{3, 10, -4, 7}的和比13大。以此类推
 */

/**
 * 
 * @param {Array} array 传入的数组
 * @return {Object} {sum: xxx, begin: xxx, end: xxx} 和为xx字数组开始与结束下标
 */
function getBiggestSubArray(array) {

  // 校验一下
  if (!array || array.length < 0) {
    throw new Error('给个靠谱的数组兄dei!')
  }

  // 规定一个整形最小值
  let max = Number.MIN_SAFE_INTEGER
  let currentMax = 0
  let beginPoint = 0
  let currentBeginPoint = 0
  let endPoint = 0
  let currentEndPoint = 0
  for (let i = 0; i < array.length; i++) {
    // 当前和小于等于0那么就把当前和设置为item区和max比较
    if (currentMax <= 0) {
      currentMax = array[i]
      currentBeginPoint = i
    } else { // 如果当前和大于0那么就和后面的相加
      currentMax += array[i]
      currentEndPoint = i
    }

    // 如果大于
    if (currentMax > max) {
      max = currentMax
      beginPoint = currentBeginPoint
      endPoint = currentEndPoint
    }

  }
  const obj = {
    max,
    subArray: endPoint < beginPoint ? [max] : array.slice(beginPoint, endPoint+1)
  }
  return obj
}

const array1 = [1, -2, 3, 10, -4, 7, 2, -5]
const array2 = [-2, -8, -1, -5, -9]
const array3 = [2, 8, 1, 5, 9]
const array4 = [1, -34, 44, -13, 5, 12, -20, 23, 1, -2, 3]
console.log(getBiggestSubArray(array1))
console.log(getBiggestSubArray(array2))
console.log(getBiggestSubArray(array3))
console.log(getBiggestSubArray(array4))