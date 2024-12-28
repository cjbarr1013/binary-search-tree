import { Node } from './Node.js';

export function Tree(arr) {
  let root = buildTree(sortArr(arr));

  function sortArr(arr) {
    let newArr = arr.toSorted((a, b) => a - b);
    newArr = new Set(newArr);
    return [...newArr];
  }

  function buildTree(arr) {
    if (arr.length === 0) return null;

    let mid = Math.floor(arr.length / 2);
    let rootNode = new Node(arr[mid]);

    rootNode.left = buildTree(arr.slice(0, mid));
    rootNode.right = buildTree(arr.slice(mid + 1, arr.length));

    return rootNode;
  }

  function prettyPrint(node, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  const printTree = () => prettyPrint(root);

  const insert = (value) => {
    let parentNode = null;
    let currentNode = root;

    while (currentNode !== null) {
      parentNode = currentNode;
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return; // if equal, exit without doing anything
      }
    }

    if (value < parentNode.value) {
      parentNode.left = new Node(value);
    } else {
      parentNode.right = new Node(value);
    }
  };

  const deleteItem = (value) => {
    let parentNode = null;
    let currentNode = root;

    while (currentNode !== null && currentNode.value !== value) {
      parentNode = currentNode;
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    if (currentNode === null) {
      // value not found
      return;
    }

    if (currentNode.left === null || currentNode.right === null) {
      let newCurrentNode =
        currentNode.left === null ? currentNode.right : currentNode.left;

      if (parentNode === null) {
        root = newCurrentNode;
        return;
      }

      if (currentNode === parentNode.left) {
        parentNode.left = newCurrentNode;
      } else {
        parentNode.right = newCurrentNode;
      }
    } else {
      let tempNodeParent = null;
      let tempNode = currentNode.right;

      while (tempNode.left !== null) {
        tempNodeParent = tempNode;
        tempNode = tempNode.left;
      }

      if (tempNodeParent !== null) {
        tempNodeParent.left = tempNode.right;
      } else {
        currentNode.right = tempNode.right;
      }

      currentNode.value = tempNode.value;
    }
  };

  const find = (value) => {
    let currentNode = root;

    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode; // if equal, return node
      }
    }
  };

  const levelOrder = (callback) => {
    if (root === null) return;
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
      let currentNode = queue[0];
      callback(currentNode);
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
      queue.shift();
    }
  };

  const inOrder = (callback, subroot = root) => {
    if (subroot === null) return;

    if (subroot.left !== null) {
      inOrder(callback, subroot.left);
    }

    callback(subroot);

    if (subroot.right !== null) {
      inOrder(callback, subroot.right);
    }
  };

  const preOrder = (callback, subroot = root) => {
    if (subroot === null) return;

    callback(subroot);

    if (subroot.left !== null) {
      preOrder(callback, subroot.left);
    }

    if (subroot.right !== null) {
      preOrder(callback, subroot.right);
    }
  };

  const postOrder = (callback, subroot = root) => {
    if (subroot === null) return;

    if (subroot.left !== null) {
      postOrder(callback, subroot.left);
    }

    if (subroot.right !== null) {
      postOrder(callback, subroot.right);
    }

    callback(subroot);
  };

  const height = (node) => {};

  const depth = (node) => {};

  const isBalanced = () => {};

  const rebalance = () => {};

  return {
    printTree,
    insert,
    deleteItem,
    find,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
  };
}
