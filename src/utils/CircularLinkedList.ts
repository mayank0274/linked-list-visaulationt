export class CircularLinkedListNode {
  data: string;
  next: CircularLinkedListNode | null;

  constructor(data: string, next: CircularLinkedListNode | null) {
    this.data = data;
    this.next = next;
  }
}

export class CircularLinkedList {
  BASE_ADDRESS: CircularLinkedListNode | null = null;

  // get set base address
  setBaseAddress(baseNode: CircularLinkedListNode): void {
    this.BASE_ADDRESS = baseNode;
  }

  getBaseAddress(): CircularLinkedListNode | null {
    return this.BASE_ADDRESS;
  }

  // insertion at start
  insertAtStart(node: CircularLinkedListNode): void {
    if (this.BASE_ADDRESS === null) {
      this.BASE_ADDRESS = node;
      node.next = this.BASE_ADDRESS;
      return;
    }

    let ptr = this.BASE_ADDRESS;

    while (ptr && ptr.next !== this.BASE_ADDRESS) {
      ptr = ptr.next!;
    }

    if (ptr) {
      ptr.next = node;
    }
    node.next = this.BASE_ADDRESS;
    this.BASE_ADDRESS = node;
  }

  // insert at end
  insertAtEnd(node: CircularLinkedListNode): void {
    let ptr = this.BASE_ADDRESS;

    if (ptr === null) {
      this.BASE_ADDRESS = node;
      node.next = this.BASE_ADDRESS;
      return;
    }
    while (ptr && ptr.next !== this.BASE_ADDRESS) {
      ptr = ptr.next;
    }

    if (ptr) {
      ptr.next = node;
      console.log(ptr);
    }
    node.next = this.BASE_ADDRESS;
  }

  // insert after given data
  insertAfterGivenData(target: string, node: CircularLinkedListNode): void {
    let ptr = this.BASE_ADDRESS;

    while (ptr) {
      if (ptr.data === target) {
        break;
      }
      ptr = ptr.next;
    }

    if (ptr) {
      node.next = ptr.next;
      ptr.next = node;
    }
  }

  // deletion at start
  deleteFromStart(): void {
    // change base address from end
    let ptr = this.BASE_ADDRESS;
    while (ptr && ptr.next !== this.BASE_ADDRESS) {
      ptr = ptr.next;
    }

    if (ptr && this.BASE_ADDRESS) {
      ptr.next = this.BASE_ADDRESS.next;
      this.BASE_ADDRESS = this.BASE_ADDRESS.next;
    }
  }

  // delete from end
  deleteFromEnd(): void {
    let ptr = this.BASE_ADDRESS;
    let prev: CircularLinkedListNode | null = null;
    while (ptr && ptr.next !== this.BASE_ADDRESS) {
      prev = ptr;
      ptr = ptr.next;
    }

    if (prev) {
      prev.next = this.BASE_ADDRESS;
    }
  }

  // delete after given data
  deleteAfterGivenData(target: string): void {
    let ptr = this.BASE_ADDRESS;

    while (ptr && ptr.next !== this.BASE_ADDRESS) {
      if (ptr.data === target) {
        break;
      }
      ptr = ptr.next;
    }

    if (ptr && ptr.next === this.BASE_ADDRESS) {
      console.log("reached at end use deleteFromEnd() function");
      return;
    }

    if (ptr && ptr.next) {
      let targetPtr = ptr.next.next;
      ptr.next = targetPtr;
    }
  }

  // print linked list
  printLinkedList(): any[] {
    let ptr = this.BASE_ADDRESS;

    let res = [];
    while (ptr && ptr.next !== this.BASE_ADDRESS) {
      res.push(ptr);
      ptr = ptr.next;
    }

    if (ptr) {
      res.push(ptr);
    }

    return res;
  }
}

// const linkedList = new CircularLinkedList();

// const node = new CircularLinkedListNode("1", null);
// node.next = node;

// linkedList.setBaseAddress(node);
// linkedList.setBaseAddress(node);

// const node2 = new CircularLinkedListNode("2", null);
// linkedList.insertAtStart(node2);

// const node3 = new CircularLinkedListNode("3", null);
// linkedList.insertAtStart(node3);

// const node4 = new CircularLinkedListNode("4", null);
// linkedList.insertAtStart(node4);

// const node5 = new CircularLinkedListNode("0", null);
// linkedList.insertAtEnd(node5);

// const node6 = new CircularLinkedListNode("-1", null);
// linkedList.insertAtEnd(node6);

// const node7 = new CircularLinkedListNode("2.5", null);
// linkedList.insertAfterGivenData("2", node7);

// linkedList.deleteFromStart();
// linkedList.deleteFromEnd();
// linkedList.deleteFromEnd();
// linkedList.deleteAfterGivenData("2");
// linkedList.deleteFromEnd();
// linkedList.printLinkedList();
