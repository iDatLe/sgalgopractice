// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) { // If no second argument is passed in, next is defaulted to
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);

    // Visualize: this.head points to new Node. The new Node's next now points to the OLD 'this.head'
    // HEAD --> (5, next) --> null
    // HEAD --> (NEW NODE, next) --> (5, next) --> null
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) { // while it still exists

      counter++;
      node = node.next

    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }

      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }
 
  removeFirst() {

    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      this.head = null;
      return;
    }

    let currNode = this.head.next;
    let prevNode = this.head;

    while (currNode) {
      if (currNode.next === null) {
        prevNode.next = null;
      }

      currNode = currNode.next
      prevNode = prevNode.next;
    }
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are existing nodes in the chain
      last.next = new Node(data);
    } else {
      // The chain is empty
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while(node) {
      if (counter === index) {
        return node;
      }

      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    } else if (index === 0) {
      return this.head = this.head.next;
    }

    const prev = this.getAt(index - 1);
    // const future = this.getAt(index + 1);

    if (!prev || !prev.next) {
      return;
    }

    // return prev.next = future;
    return prev.next = prev.next.next;
    
  }

}

const list = new LinkedList();

list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);

console.log(list.removeAt(6),
list.getAt(0))


module.exports = {
  Node,
  LinkedList
};