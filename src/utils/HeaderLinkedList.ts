export class HeaderLinkedListNode {
  data: string;
  next: HeaderLinkedListNode | null;

  constructor(data: string, next: HeaderLinkedListNode | null) {
    this.data = data;
    this.next = next;
  }
}

export class HeaderLinkedList {
  // contain address of head node
  BASE_ADDRESS: HeaderLinkedListNode = new HeaderLinkedListNode("0", null);

  // get base address -> head node
  getBaseAddress(): HeaderLinkedListNode {
    return this.BASE_ADDRESS;
  }

  // insertion at start
  insertAtStart(node: HeaderLinkedListNode): void {
    node.next = this.BASE_ADDRESS.next;
    this.BASE_ADDRESS.next = node;
    this.BASE_ADDRESS.data = String(Number(this.BASE_ADDRESS.data) + 1);

    // node.next = this.BASE_ADDRESS;
    // this.BASE_ADDRESS = node;
  }

  // insert at end
  insertAtEnd(node: HeaderLinkedListNode): void {
    let ptr: HeaderLinkedListNode | null = this.BASE_ADDRESS;

    while (ptr.next != null) {
      ptr = ptr.next;
    }

    ptr.next = node;
    this.BASE_ADDRESS.data = String(Number(this.BASE_ADDRESS.data) + 1);
  }

  // insert after given data
  insertAfterGivenData(target: string, node: HeaderLinkedListNode): void {
    let ptr: HeaderLinkedListNode | null = this.BASE_ADDRESS.next;

    while (ptr != null) {
      if (ptr.data === target) {
        break;
      }
      ptr = ptr.next;
    }

    if (ptr) {
      node.next = ptr.next;
      ptr.next = node;
      this.BASE_ADDRESS.data = String(Number(this.BASE_ADDRESS.data) + 1);
    }
  }

  // deletion at start
  deleteFromStart(): void {
    this.BASE_ADDRESS.next = this.BASE_ADDRESS.next?.next || null;
    this.BASE_ADDRESS.data = String(Number(this.BASE_ADDRESS.data) - 1);
  }

  // delete from end
  deleteFromEnd(): void {
    let ptr: HeaderLinkedListNode | null = this.BASE_ADDRESS;
    let prev: HeaderLinkedListNode | null = null;

    while (ptr.next != null) {
      prev = ptr;
      ptr = ptr.next;
    }

    if (prev) {
      prev.next = null;
    }
    this.BASE_ADDRESS.data = String(Number(this.BASE_ADDRESS.data) - 1);
  }

  // delete after given data
  deleteAfterGivenData(target: string): void {
    let ptr: HeaderLinkedListNode | null = this.BASE_ADDRESS;

    while (ptr != null) {
      if (ptr.data === target) {
        break;
      }
      ptr = ptr.next;
    }

    if (ptr && ptr.next) {
      let targetPtr: HeaderLinkedListNode | null = ptr.next.next;
      ptr.next = targetPtr;
      this.BASE_ADDRESS.data = String(Number(this.BASE_ADDRESS.data) - 1);
    } else {
      console.log("reached at end use deleteFromEnd() function");
    }
  }

  // print linked list
  printLinkedList(): any[] {
    let ptr = this.BASE_ADDRESS;
    let res = [];

    while (ptr != null) {
      res.push(ptr);
      ptr = ptr.next!;
    }

    return res;
  }
}
