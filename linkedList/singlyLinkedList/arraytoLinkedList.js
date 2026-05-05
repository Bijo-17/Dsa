
let arr = [10,30,50,60, 70];

class Node{
     constructor(value){
        this.value = value;
        this.next = null;
     }
}

class sLinkedList{
     constructor(){
        this.head = null;
     }

   append(data){
      if(!this.head){
          
          this.head = new Node(data[0]);
          
      }

    let current = this.head;
      for(let i=1; i<data.length; i++){
         let newNode = new Node(data[i]);
         current.next = newNode;  
         current = current.next;
      }
       current.next = null;
      
   }  

   printList(){
     let current = this.head;
     let result = '';
      while(current){
        result = result+current.value+'->';
        current = current.next;
      }
      console.log(result+null);
   }
     
}

const list = new sLinkedList();

list.append(arr);
console.log(arr);
list.printList();

