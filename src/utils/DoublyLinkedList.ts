export class DoublyLinkedListNode {
  data: string;
  forward: DoublyLinkedListNode | null;
  backward: DoublyLinkedListNode | null;

  constructor(
    data: string,
    forward: DoublyLinkedListNode | null,
    backward: DoublyLinkedListNode | null
  ) {
    this.data = data;
    this.forward = forward;
    this.backward = backward;
  }
}

export class DoublyLinkedList {
  BASE_ADDRESS: DoublyLinkedListNode | null = null;

  // get set base address
  setBaseAddress(baseNode: DoublyLinkedListNode): void {
    this.BASE_ADDRESS = baseNode;
  }

  getBaseAddress(): DoublyLinkedListNode | null {
    return this.BASE_ADDRESS;
  }

  // insert at start
  insertAtStart(node: DoublyLinkedListNode): void {
    if (this.BASE_ADDRESS) {
      this.BASE_ADDRESS.backward = node;
      node.forward = this.BASE_ADDRESS;
    }
    this.BASE_ADDRESS = node;
  }

  // insert in end
  insertAtEnd(node: DoublyLinkedListNode): void {
    let ptr = this.BASE_ADDRESS;

    while (ptr && ptr.forward != null) {
      ptr = ptr.forward;
    }

    if (ptr) {
      ptr.forward = node;
      node.backward = ptr;
    } else {
      this.BASE_ADDRESS = node; // If the list was empty
    }
  }

  // insert after given data
  insertAfterGivenData(target: string, node: DoublyLinkedListNode): void {
    let ptr = this.BASE_ADDRESS;

    while (ptr != null) {
      if (ptr.data === target) {
        break;
      }
      ptr = ptr.forward;
    }

    if (!ptr || !ptr.forward) {
      console.log("reached at end use insertAtEnd() function");
      return;
    }
    node.forward = ptr.forward;
    node.backward = ptr;
    if (ptr.forward) {
      ptr.forward.backward = node;
    }
    ptr.forward = node;
  }

  // delete from start
  deleteFromStart(): void {
    if (this.BASE_ADDRESS) {
      this.BASE_ADDRESS = this.BASE_ADDRESS.forward;
      this.BASE_ADDRESS!.backward = null;
    }
  }

  // delete from end
  deleteFromEnd(): void {
    let ptr = this.BASE_ADDRESS;

    if (!ptr) return; // If the list is empty

    while (ptr.forward != null) {
      ptr = ptr.forward;
    }

    if (ptr.backward) {
      ptr.backward.forward = null;
    } else {
      this.BASE_ADDRESS = null; // If the list had only one element
    }
  }

  // delete after given data
  deleteAfterGivenData(target: string): void {
    let ptr = this.BASE_ADDRESS;

    while (ptr != null) {
      if (ptr.data === target) {
        break;
      }
      ptr = ptr.forward;
    }

    if (!ptr || !ptr.forward) {
      console.log("reached at end use deleteFromEnd() function");
      return;
    }

    ptr.forward = ptr.forward.forward;
    if (ptr.forward) {
      ptr.forward.backward = ptr;
    }
  }

  // print linkedlist
  printLinkedList(): any[] {
    let ptr = this.BASE_ADDRESS;
    let res = [];
    while (ptr != null) {
      res.push(ptr);
      ptr = ptr.forward;
    }

    return res;
  }
}

//   const linkedList = new DoublyLinkedList();

//   const node1 = new DoublyLinkedListNode(1, null, null);
//   linkedList.setBaseAddress(node1);
//   // linkedList.printLinkedList();

//   const node2 = new DoublyLinkedListNode(2, null, null);
//   linkedList.insertAtStart(node2);

//   const node3 = new DoublyLinkedListNode(3, null, null);
//   linkedList.insertAtStart(node3);

//   const node4 = new DoublyLinkedListNode(4, null, null);
//   linkedList.insertAtEnd(node4);

//   const node5 = new DoublyLinkedListNode(5, null, null);
//   linkedList.insertAtEnd(node5);

//   const node6 = new DoublyLinkedListNode(4.5, null, null);
//   linkedList.insertAfterGivenData(4, node6);

//   const node7 = new DoublyLinkedListNode(4.75, null, null);
//   linkedList.insertAfterGivenData(4.5, node7);

//   const node8 = new DoublyLinkedListNode(6, null, null);
//   linkedList.insertAtEnd(node8);

//   linkedList.printLinkedList();
//   linkedList.deleteFromStart();
//   console.log("after delete from start");
//   linkedList.printLinkedList();

//   linkedList.deleteFromEnd();
//   console.log("after delete from end");
//   linkedList.printLinkedList();

//   linkedList.deleteAfterGivenData(2);
//   console.log("delete after 2");
//   linkedList.printLinkedList();

//   linkedList.deleteAfterGivenData(4.5);
//   console.log("delete after 4.5");
//   linkedList.printLinkedList();
