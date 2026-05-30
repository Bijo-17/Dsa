

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
     
    }

    function isIdentical(bst1,bst2){

        if(!bst1 && !bst2) return true;
        if(!bst1 || !bst2) return false;

        if(bst1.value !== bst2.value) return false;

        return isIdentical(bst1.left,bst2.left) && isIdentical(bst1.right,bst2.right);
        
    }
    
const bst1 = new BinarySearchTree();    
const bst2 = new BinarySearchTree(); 
bst1.insert(10);
bst1.insert(5);
bst1.insert(15);
bst1.insert(2);
bst1.insert(7);
bst1.insert(11);

bst2.insert(10);
bst2.insert(5);
bst2.insert(15);
bst2.insert(2);
bst2.insert(7);
bst2.insert(11)

console.log(isIdentical(bst1.root,bst2.root))

