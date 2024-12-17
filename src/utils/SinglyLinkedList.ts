export class SinglyLinkedListNode {
  data: string;
  next: SinglyLinkedListNode | null;

  constructor(data: string, next: SinglyLinkedListNode | null) {
    this.data = data;
    this.next = next;
  }
}

export class SinglyLinkedList {
  BASE_ADDRESS: SinglyLinkedListNode | null = null;

  // get set base address
  setBaseAddress(baseNode: SinglyLinkedListNode | null): void {
    this.BASE_ADDRESS = baseNode;
  }

  getBaseAddress(): SinglyLinkedListNode | null {
    return this.BASE_ADDRESS;
  }

  //insertion at start
  insertAtStart(node: SinglyLinkedListNode): void {
    node.next = this.BASE_ADDRESS;
    this.BASE_ADDRESS = node;
  }

  // insert at end
  insertAtEnd(node: SinglyLinkedListNode): void {
    let ptr = this.BASE_ADDRESS;

    if (ptr === null) {
      this.BASE_ADDRESS = node;
      return;
    }

    while (ptr.next != null) {
      ptr = ptr.next;
    }

    ptr.next = node;
  }

  // insert after given data
  insertAfterGivenData(target: string, node: SinglyLinkedListNode): void {
    let ptr = this.BASE_ADDRESS;

    while (ptr != null) {
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
    if (this.BASE_ADDRESS) {
      this.BASE_ADDRESS = this.BASE_ADDRESS.next;
    }
  }

  // delete from end
  deleteFromEnd(): void {
    let ptr = this.BASE_ADDRESS;
    let prev: SinglyLinkedListNode | null = null;

    if (ptr === null) return;

    while (ptr.next != null) {
      prev = ptr;
      ptr = ptr.next;
    }

    if (prev) {
      prev.next = null;
    } else {
      this.BASE_ADDRESS = null;
    }
  }

  // delete after given data
  deleteAfterGivenData(target: string): void {
    let ptr = this.BASE_ADDRESS;

    while (ptr != null) {
      if (ptr.data === target) {
        break;
      }
      ptr = ptr.next;
    }

    if (ptr && ptr.next) {
      let targetPtr = ptr.next.next;
      ptr.next = targetPtr;
    } else {
      console.log("reached at end use deleteFromEnd() function");
    }
  }

  //print linked list
  printLinkedList(): any[] {
    let ptr = this.BASE_ADDRESS;
    let res = [];

    while (ptr != null) {
      res.push(ptr);
      ptr = ptr.next;
    }

    return res;
  }
}

// const linkedList = new SinglyLinkedList();

// const node = new SinglyLinkedListNode("1", null);
// linkedList.insertAtStart(node);
// linkedList.setBaseAddress(node);

// linkedList.setBaseAddress(node);

// const node2 = new SinglyLinkedListNode("2", null);
// linkedList.insertAtEnd(node2);

// const node3 = new SinglyLinkedListNode("3", null);
// linkedList.insertAtEnd(node3);

// const node4 = new SinglyLinkedListNode("4", null);
// linkedList.insertAtEnd(node4);

// const node5 = new SinglyLinkedListNode("0", null);
// linkedList.insertAtStart(node5);

// const node6 = new SinglyLinkedListNode("3.5", null);
// linkedList.insertAfterGivenData("3", node6);

// linkedList.printLinkedList();
// linkedList.deleteAfterGivenData("2");
// console.log("deleting after 2");
// linkedList.printLinkedList();

// linkedList.deleteAfterGivenData("4");
