/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个非递减序列的一个旋转，输出旋转数组的最小元素。
 *
 * 数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，
 * 该数组的最小值为1。
 */

/**
 * 思路：
 * 1.遍历一次找最小，然后记录位置，再拼装输出
 * 2.二分查找最小，后面相同 
 */

/**
 * @param {Array} array
 */
function findMinNum(array) {
  const font = 0;
  const last = array.length - 1;
  let mid = Math.ceil(last / 2);
  // 重叠了就等于找到了。
  if (font === last) {
    return array[font];
  }
  // 数组长度为二时也只需要对比和返回
  if (array.length === 2) {
    return array[font] > array[last] ? array[last] : array[font];
  }
  // 如果中间的数字大于等于前面的数字，那么最小值在中间数字的右边
  if (array[mid] >= array[font]) {
    const subArray = array.slice(mid, last);
    return findMinNum(subArray);
  } else if (array[mid] <= array[last]) {
    // 如果中间的数小于等于右边的那么，最小值在中间数字的左边
    const subArray = array.slice(font, mid + 1);
    return findMinNum(subArray);
  }
}

const array = [4, 5, 6, 7, 1, 2, 3]

console.log(findMinNum(array))