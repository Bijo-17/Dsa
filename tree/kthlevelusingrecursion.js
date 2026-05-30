
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
        
           if(newNode.value < root.value){
               if(root.left === null){
                   root.left = newNode;
                   
               } else {
                   this.insertNode(root.left , newNode);
               }
           } else {
               if(root.right === null){
                 root.right = newNode;
               } else {
                  this.insertNode(root.right , newNode);
               }
           }
     }

     kthLevel(root,k){
        if(root === null ) return;

        if(k===0){
            console.log(root.value);
            return;
        }
        this.kthLevel(root.left,k-1);
        this.kthLevel(root.right,k-1);
     }
 
     

    }
    
const bst = new BinarySearchTree();    
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(11);

bst.kthLevel(bst.root,2);
