




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

    
     isValidBST(root,min=-Infinity,max = Infinity){
          if(!root){
            return true;
          }

          if(root.value <= min || root.value >= max){
             return false;
          }

          return (this.isValidBST(root.left,min,root.value) && this.isValidBST(root.right,root.value,max));
     }
    
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(20);
bst.insert(4);
bst.insert(7);
bst.insert(14);
bst.insert(2);

console.log("isValid binary search tree:",bst.isValidBST(bst.root));


