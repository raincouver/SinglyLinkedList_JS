'use strict';



//node type
class Node {
  constructor(data, next=null) {
      this.data = data;
      this.next = next;
  }
}

// Define Singly Linked List
module.exports = class SinglyLinkedList {
  constructor() {
    this.head = new Node('head');
    this.size = 0;
    this.current = null;
  }

  //TRAVERSE
  //traverse and display the singly linked list
  traverse() {
    let result = '';
    let current = this.head;

    while (current) {
      result += current.data;
      current = current.next;
      if (current) {
        result += '->';
      }
    }
    console.log(result);
  }

  //check if list is empty
  isEmpty() {
    return this.size === 0;
  }

  //show current node
  show() {
    console.log(this.currNode.data);
  }

  //move n nodes from current position
  //if n is larger than the length of the list, the last node will be returned
  advance(n, current = this.head) {
    this.current = current;

    while ((n--) && this.current.next) {
      this.current = this.current.next;
    }

    return this.current;
  }

  //SEARCH
  //find and return the node in the list
  find(item) {
    let current = this.head;

    while (current && (current.data !== item)) {
      current = current.next;
    }

    return current;
  }

  //find and return last node in the list
  findLast() {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    return current;
  }


  //INSERT
  // insert at the beginning of the list
  prepend_list(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.size++;
  }

  //insert at the end of the list
  append_list(data) {
    let current = this.findLast();
    let newNode = new Node(data);

    current.next = newNode;
    this.size++;
  }

  //insert after the item of the list
    insert(item, data) {
      let itemNode = this.find(item);

      //if item doesn't exist
      if(!itemNode) {
          return;
      }

      let newNode = new Node(data, itemNode.next);
      itemNode.next = newNode;
     
      this.size++;
  }

  //DELETE
  //remove the head of the list
  remove_head() {
    if (this.head !== null) {
      this.head = this.head.next;
      this.size--;
    }
  }

  //remove the end of the list
  remove_end() {
    if (this.head === null || this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      let previous = null;
      while (current.next !== null) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
    }
    this.size--;
  }

  //remove the item at the postion in the list
  remove(position) {
    if (this.head === null) {
      return;
    }
    if (position === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;
      while (index < position && current !== null) {
        previous = current;
        current = current.next;
        index++;
      }
      if (current !== null) {
        previous.next = current.next;
      }
    }
    this.size--;
  }

  // get the length of the singly linked list
  getLength() {
    return this.size;
  }

  // get value of the node at the index of the list
  get(index) {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }

    //clear the list
    clear() {
      this.head.next = null;
      this.size = 0;
  }
}

