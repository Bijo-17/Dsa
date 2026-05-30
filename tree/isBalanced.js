
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

     height(root){

        if(!root) return -1;

        return Math.max(this.height(root.left),this.height(root.right))+1;

     }

      isBalanced(root){
         if(!root) return true;

          let leftHeight  = this.height(root.left);
          let rightHeight = this.height(root.right);

          if(Math.abs(leftHeight - rightHeight) >  1) return false;

          return this.isBalanced(root.left) && this.isBalanced(root.right);
      }

   


    }
    
const bst = new BinarySearchTree();    

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16)



console.log(bst.isBalanced(bst.root))