import { Tree } from './Tree.js';

function logNodeValue(node) {
  console.log(node.value);
}

const myArr = [17, 62, 78, 23, 8, 21, 65, 3, 32, 7, 98, 67, 49, 12, 8];
const tree = new Tree(myArr);

tree.printTree();

tree.insert(8);
tree.insert(43);
tree.insert(97);

tree.printTree();

tree.deleteItem(32);

tree.printTree();

console.log(tree.find(67));

tree.levelOrder(logNodeValue);
