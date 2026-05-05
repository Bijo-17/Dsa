
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class sLinkedList{
     constructor(){
        this.head = null;
     }

     append(data){
         const newNode = new Node(data);
         
        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next){
           current = current.next;
        }
        
        current.next = newNode;
     }

     listSize(){
        let size = 0;
        let current = this.head;
        while(current){
            size++;
            current=current.next;
        }

        return size;
     }
     
      addAtMiddle(value){
         const newNode = new Node(value);
         let current = this.head;
         let middle = Math.floor(this.listSize()/2)
   
          for(let i = 0 ; i< middle-1 ; i++){
             current = current.next;
          }
            newNode.next = current.next;
           current.next = newNode;
           
      }
     printList(){
        let current = this.head;
        let result = '';
        while(current){
            result = result+current.data+'->';
            current = current.next;
        }
        console.log(result+'null');
     }
}

const list = new sLinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.printList();
console.log(list.listSize());
list.addAtMiddle(25);
list.printList();
