// Node class represents an individual element in the linked list
class Node {
    constructor(data) {
        this.data = data; // Store the data in the node
        this.next = null; // The next pointer is initially null
    }
}

// LinkedList class to manage the linked list operations
class LinkedList {

    constructor() {
        this.head = null; // Head of the list, initially null
        this.tail = null; // Tail of the list, initially null
        this.size = 0;    // Keeps track of the number of nodes in the list
    }

    // Function to search for a value in the linked list
    search(value) {
        let current = this.head; // Start from the head of the list

        // Traverse the list until we reach the end
        while (current !== null) {
            // If the current node's data matches the value, return true
            if (current.data === value) {
                return true;
            }
            current = current.next; // Move to the next node
        }
        
        // If the value is not found, return false
        return false;
    }

    // Function to add a new node to the linked list
    addNode(data) {
        const newNode = new Node(data); // Create a new node with the provided data

        // If the list is empty (tail is null), the new node becomes both the head and the tail
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise, add the new node at the end (tail) of the list
            this.tail.next = newNode;
            this.tail = newNode; // Update the tail to the new node
        }
        this.size++; // Increment the size of the list
    }
}

// Creating a new linked list
const list = new LinkedList();

// Adding some nodes to the list
list.addNode(10);
list.addNode(20);
list.addNode(30);

// Value to search for in the list
const valuetosearch = 130;

// Search for the value and log the result
if (list.search(valuetosearch)) {
    console.log(`${valuetosearch} found in the list`);
} else {
    console.log(`${valuetosearch} not found in the list`);
}
