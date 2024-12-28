import { Tree } from './Tree.js';

function logNodeValue(node) {
  console.log(node.value);
}

function printSeparator(msg) {
  console.log();
  console.log(msg);
  console.log('-----------------------------------');
  console.log();
}

const myArr = [
  17, 62, 78, 23, 8, 21, 65, 3, 32, 7, 98, 67, 49, 12, 8, 10, 3, 63, 22, 78, 1,
  50,
];
const tree = new Tree(myArr);

printSeparator('Tree Balanced?');
console.log(tree.isBalanced());

printSeparator('Original tree');
tree.printTree();

printSeparator('Level Order Traversal');
tree.levelOrder(logNodeValue);

printSeparator('In Order Traversal');
tree.inOrder(logNodeValue);

printSeparator('Pre Order Traversal');
tree.preOrder(logNodeValue);

printSeparator('Post Order Traversal');
tree.postOrder(logNodeValue);

tree.insert(8);
tree.insert(43);
tree.insert(97);
tree.insert(66);
tree.insert(92);
tree.insert(34);
tree.insert(99);
tree.insert(59);
tree.insert(51);

printSeparator('Tree Balanced After Insertion?');
console.log(tree.isBalanced());

printSeparator('Tree After Insertion');
tree.printTree();

tree.rebalance();

printSeparator('Tree Balanced after Rebalance?');
console.log(tree.isBalanced());

printSeparator('Rebalanced tree');
tree.printTree();

printSeparator('Level Order Traversal');
tree.levelOrder(logNodeValue);

printSeparator('In Order Traversal');
tree.inOrder(logNodeValue);

printSeparator('Pre Order Traversal');
tree.preOrder(logNodeValue);

printSeparator('Post Order Traversal');
tree.postOrder(logNodeValue);
