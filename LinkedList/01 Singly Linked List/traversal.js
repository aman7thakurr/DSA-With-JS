//node creation
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//linkedlist
class LinkedList{
constructor(){
    this.head = null;
    this.next = null;
    this.size = 0;
}

//traverse through linkedlist
traverse(){
    let current  = this.head;
    let result = "";

    while(current){
        result += current.data + " -> ";
        current = current.next;
    }
    console.log(result)
}
}

const list = new LinkedList()

//add a node to linkedlist
list.head =  new Node(10)

list.head.next = new Node(20)

list.head.next.next = new Node(30)

list.traverse()