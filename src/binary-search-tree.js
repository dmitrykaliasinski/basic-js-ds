const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  root() {
    return this.tree;
  }

  add(data) {
    this.tree = add(this.tree, data);

    function add(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (data === node.data) {
        return node;
      }

      if (node.data > data) {
        node.left = add(node.left, data);
      } else {
        node.right = add(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return has(this.tree, data);

    function has(node, data) {
      if (!node) {
        return false;
      }

      if (data === node.data) {
        return true;
      }

      if (node.data > data) {
        return has(node.left, data);
      } else {
        return has(node.right, data);
      }
    }
  }

  find(data) {
    return find(this.tree, data);

    function find(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        return node;
      }

      if (node.data > data) {
        return find(node.left, data);
      } else {
        return find(node.right, data);
      }
    }
  }

  remove(data) {
    this.tree = remove(this.tree, data);

    function remove(node, data) {
      if (!node) {
        return null;
      }

      if (node.data > data) {
        node.left = remove(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = remove(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = remove(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.tree) {
      return null;
    }

    let minNode = this.tree;

    while (minNode.left) {
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max() {
    if (!this.tree) {
      return null;
    }

    let maxNode = this.tree;

    while (maxNode.right) {
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
