class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{

    constructor(){
        this.head = null; 
        this.tail = null;
        this.size = 0;
    }

    search(value){
        let current = this.head;

        while(current !== null){
            if(current.data === value){
                return true
            }
            current  = current.next;
        }
    }

    addNode(data){
        const newNode   = new Node(data)

        if(this.tail=== null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
}

const list = new LinkedList()

list.addNode(10)
list.addNode(20)
list.addNode(30)
const valuetosearch = 130
if(list.search(valuetosearch)){
    console.log(`${valuetosearch} found in the list`)
}else{
    console.log(`${valuetosearch} not found in the list`)
}