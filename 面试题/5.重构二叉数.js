/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。、
 * 前序遍历的顺序为：根左右 
 * 中序遍历的顺序为：左根右
 */

/**
 * 思路：
 * 1.首先树根为前序遍历的第一个元素
 * 2.中序遍历中，找到树根位置，其左边为其左子树，右边的对应右子树
 * 3.去掉前序遍历中的根节点，与把中序遍历分成两半
 */

const tree = {
  text: null,
  leftChild: {},
  rightChild: {}
}

/**
 * @param {object} subTree 子树
 * @param {array} font 前序遍历的子数组
 * @param {array} middle 中序遍历的子数组
 */
function reConstructBinaryTree(subTree, font, middle) {
  // 检查数组
  if (font.length !== middle.length) {
    throw new Error('前中序数组元素数量不同');
  }
  if (font.length === 0) {
    return
  }
  // 根节点为前序遍历第一个元素
  const root = font[0];
  subTree.text = root;
  // 找到中序遍历中根节点
  let midRootLocation = 0;
  for(let i = 0; i < middle.length; i++) {
    if (root === middle[i]) {
      midRootLocation = i;
      break;
    }
  }
  // 把数组分成两半
  // 前序的去掉第一个，前半部分为1-location，后半部分为location-length
  const leftFont = font.slice(1, midRootLocation + 1);
  const rightFont = font.slice(midRootLocation + 1, font.length);
  // 中序左半部分为0-location，右子树部分为location+1 - length
  const leftMid = middle.slice(0, midRootLocation);
  const rigthMid = middle.slice(midRootLocation + 1, middle.length);
  
  subTree.leftChild = {}
  subTree.rightChild = {}

  reConstructBinaryTree(subTree.leftChild, leftFont, leftMid);
  reConstructBinaryTree(subTree.rightChild, rightFont, rigthMid);
}


const font = [1,2,4,7,3,5,6,8];
const middle = [4,7,2,1,5,3,8,6];

reConstructBinaryTree(tree, font, middle)

console.log(JSON.stringify(tree))