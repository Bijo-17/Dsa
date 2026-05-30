
class Node{
     constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
     }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
   
     insert(value){
         
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
            return;
        }
          
         this.insertNode(this.root , newNode)       
           
    }
    
     insertNode(root,newNode){
         if(root.value > newNode.value){
             if(root.left === null){
                 root.left = newNode;
             } else {
                 this.insertNode(root.left,newNode);
             }
         } else {
             if(root.right === null){
                 root.right = newNode;
             } else {
                 this.insertNode(root.right,newNode);
             }
         }
     }

   countInternalNode(){
     let queue = [this.root];
     let count = 0;

     while(queue.length){
        let current = queue.shift();

        if(current.left || current.right){
            count ++;
        }
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
     }
       return count;
   }


    }
    
const bst = new BinarySearchTree();    

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(11);

console.log(bst.countInternalNode());
