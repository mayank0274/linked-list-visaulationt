import { useState } from "react";
import "./App.css";
import {
  SinglyLinkedListNode,
  SinglyLinkedList,
} from "./utils/SinglyLinkedList";
import {
  DoublyLinkedList,
  DoublyLinkedListNode,
} from "./utils/DoublyLinkedList";
import {
  CircularLinkedList,
  CircularLinkedListNode,
} from "./utils/CircularLinkedList";
import {
  HeaderLinkedList,
  HeaderLinkedListNode,
} from "./utils/HeaderLinkedList";
import RenderLinkedList from "./components/RenderLinkedList";

const OPERATIONS = [
  {
    title: "Insertion at start",
    key: "insertion_start",
    type: "insertion",
  },
  {
    title: "Insertion at end",
    key: "insertion_end",
    type: "insertion",
  },
  {
    title: "Insertion after given data",
    key: "insertion_after_data",
    type: "insertion",
  },
  {
    title: "Deletion from start",
    key: "deletion_start",
    type: "deletion",
  },
  {
    title: "Deletion from end",
    key: "deletion_end",
    type: "deletion",
  },
  {
    title: "Deletion after given data",
    key: "deletion_after_data",
    type: "deletion",
  },
  {
    title: "Print",
    key: "print",
    type: "print",
  },
];

function App() {
  const [type, setType] = useState<string>("");
  const [linkedList, setLinkedList] = useState<
    | SinglyLinkedList
    | DoublyLinkedList
    | CircularLinkedList
    | HeaderLinkedList
    | null
  >(null);
  const [res, setRes] = useState<any[]>([]);
  const [operation, setOperation] = useState("");

  // select type
  const onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
    let linkedList = null;

    console.log(e.target.value);
    switch (e.target.value) {
      case "singly_ll":
        linkedList = new SinglyLinkedList();
        break;
      case "doubly_ll":
        linkedList = new DoublyLinkedList();
        break;
      case "circular_ll":
        linkedList = new CircularLinkedList();
        break;
      case "header_ll":
        linkedList = new HeaderLinkedList();
        break;
      default:
        break;
    }

    setLinkedList(linkedList);
    let res = linkedList!.printLinkedList();
    setOperation("header_linked_list_creation");
    setRes(res);
  };

  //perfrom action
  const performAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const operation = e.target.value;
    let node:
      | SinglyLinkedListNode
      | DoublyLinkedListNode
      | CircularLinkedListNode
      | HeaderLinkedListNode
      | null;

    if (operation.includes("insertion")) {
      let data = prompt("enter data to insert");

      if (!data) {
        alert("data is required");
        return;
      }

      switch (type) {
        case "singly_ll":
          node = new SinglyLinkedListNode(data, null);
          break;
        case "doubly_ll":
          node = new DoublyLinkedListNode(data, null, null);
          break;
        case "circular_ll":
          node = new CircularLinkedListNode(data, null);
          break;
        case "header_ll":
          node = new HeaderLinkedListNode(data, null);
          break;
        default:
          break;
      }
    }

    let res: any[] = [];

    switch (operation) {
      case "insertion_start":
        linkedList!.insertAtStart(node! as any);
        res = linkedList!.printLinkedList();
        break;
      case "insertion_end":
        linkedList!.insertAtEnd(node! as any);
        res = linkedList!.printLinkedList();
        break;
      case "insertion_after_data":
        let data = prompt("enter data after which you want to insert node");

        if (!data) {
          alert("data is required");
          return;
        }
        linkedList!.insertAfterGivenData(data, node! as any);
        res = linkedList!.printLinkedList();
        break;
      case "deletion_start":
        linkedList!.deleteFromStart();
        res = linkedList!.printLinkedList();
        break;
      case "deletion_end":
        linkedList!.deleteFromEnd();
        res = linkedList!.printLinkedList();
        break;
      case "deletion_after_data":
        let elem = prompt("enter data after which you want to delete");

        if (!elem) {
          alert("elem is required");
          return;
        }
        linkedList!.deleteAfterGivenData(elem);
        res = linkedList!.printLinkedList();
        break;
      case "print":
        res = linkedList!.printLinkedList();
        break;
      default:
        alert("invalid operation");
    }

    // setRes(`// ${operation} \n\n` + res);

    setOperation(operation);
    setRes(res);
    e.target.checked = false;
  };

  // clear options
  const clearOptions = () => {
    setLinkedList(null);
    setType("");
    setRes([]);
  };

  return (
    <>
      <h1>Linked list</h1>
      <div className="header">
        <h4>Choose option to proceed further </h4>
        <button onClick={clearOptions} className="clearBtn">
          Reset
        </button>
      </div>

      <div className="linkedListTypes">
        <div>
          <label>Singly Linked List</label>
          <input
            type="radio"
            name="type"
            value="singly_ll"
            onChange={onChangeType}
            checked={type === "singly_ll"}
          />
        </div>
        <div>
          <label>Doubly Linked List</label>
          <input
            type="radio"
            name="type"
            value="doubly_ll"
            onChange={onChangeType}
            checked={type === "doubly_ll"}
          />
        </div>
        <div>
          <label>Circular Linked List</label>
          <input
            type="radio"
            name="type"
            value="circular_ll"
            onChange={onChangeType}
            checked={type === "circular_ll"}
          />
        </div>
        <div>
          <label>Header Linked List</label>
          <input
            type="radio"
            name="type"
            value="header_ll"
            onChange={onChangeType}
            checked={type === "header_ll"}
          />
        </div>
      </div>

      {type && (
        <div className="operations">
          <div>
            <h4>Select operation</h4>
          </div>

          <div className="operationOptions">
            {OPERATIONS.map(
              ({ title, key }: { title: string; key: string }) => {
                return (
                  <div key={key}>
                    <label>{title}</label>
                    <input
                      type="radio"
                      name="operation"
                      value={key}
                      onChange={performAction}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}

      {res.length > 0 && (
        <RenderLinkedList type={type} res={res} operation={operation} />
      )}
    </>
  );
}

export default App;
