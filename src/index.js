import { Tree } from './Tree.js';

function logNodeValue(node) {
  console.log(node.value);
}

function printSeparator(msg) {
  console.log();
  console.log(msg);
  console.log('-------------------------');
  console.log();
}

const myArr = [17, 62, 78, 23, 8, 21, 65, 3, 32, 7, 98, 67, 49, 12, 8];
const tree = new Tree(myArr);

printSeparator('Original tree');
tree.printTree();

tree.insert(8);
tree.insert(43);
tree.insert(97);

printSeparator('Insert several values');
tree.printTree();

tree.deleteItem(32);

printSeparator('Delete value(s)');
tree.printTree();

printSeparator('Find node given value');
console.log(tree.find(67));

printSeparator('Level Order Traversal');
tree.levelOrder(logNodeValue);

printSeparator('In Order Traversal');
tree.inOrder(logNodeValue);

printSeparator('Pre Order Traversal');
tree.preOrder(logNodeValue);

printSeparator('Post Order Traversal');
tree.postOrder(logNodeValue);
