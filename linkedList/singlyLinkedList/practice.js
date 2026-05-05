
class Node{
    constructor(value){
        this.value = value; 
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }

    append(value){
      
        const newNode = new Node(value);

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

    printList(){
       let current = this.head;
       let reuslt = '';

       while(current){
           reuslt += current.value+'->'
           current = current.next;
       }
         console.log( reuslt+''+null )
    }
    
}

const list =  new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(35);
list.printList();


// hash function 

class HashTable{
    constructor(size){
    this.size = size;
    this.table = new Array(size).fill(null);
    }

    hash(key){
         return ( 2 * key + 3 ) % this.size;
    }

    insert(key){
        let index =  this.hash(key);

        let newNode = new Node(key);

        if(this.table[index] === null){
            this.table[index] = newNode;
        } else {
             let current = this.table[index];

             while(current.next !== null){
                current = current.next;
             }
             current.next = newNode;
        }

    }

    print(){
        for(let i=0; i< this.size; i++){
              let current = this.table[i];

              let result = '';
              
              while(current){
                 result += current.value + '->';
                 current = current.next;
              }

              console.log(`${i}: ${result}null`);

        }
    }
}

const ht = new HashTable(10);

let values = [3,2,9,6,11,13,7,12];

// for(let v of values){
//     ht.insert(v);
// }

ht.print();


function hash(value,size=0){
    return value % size;
}

let hashTable = []


function insert(value,size=10){
    let index = hash(value,size);

    let newNode = new Node(value);

  
    if(hashTable[index] === undefined){
             hashTable[index] = newNode;
    } else {

        let current = hashTable[index];
       

         while(current.next !== null){
            current = current.next;
         }

         current.next = newNode;
    }

    
}

function print(){
     for(let i=0 ; i<hashTable.length ; i++){
        let current = hashTable[i];
        let result = '';

        while(current){
            result += hashTable.value;
            current = current.next;
        }

        console.log(i+ ':' + result +'null');

     }
}

for(let v of values){
    insert(v);
}

print();

db .user.find({name: {$regex:'n$' , '$options': i}})

 $group:{ '_id':null , minMark:{$min: "$mark"} , max:{$max:'$mark'} , {$project: {_id:0  , diff:{$subtract:['$max', '$min']}}} }