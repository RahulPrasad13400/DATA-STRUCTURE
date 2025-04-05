class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        this
    }
    traverse(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next 
        }
    }
    pop(){
        let current = this.head
        let newTail = this.head 
        while(current.next){
            newTail = current
            current = current.next 
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }


}

const list = new SinglyLinkedList()
list.push(10)
list.push(20)
list.push(30)
// console.log(list.pop())
list.pop()
list.traverse()

    // 10   ->    20      30 
                // ne        cu
