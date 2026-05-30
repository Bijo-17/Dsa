
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

   preOrder(root){
      if(!root){
          return
      } else {
         console.log(root.value);

         this.preOrder(root.left);
         this.preOrder(root.right);

      }
      

    }
   
  inOrder(root){
          
      if(root){
         this.inOrder(root.left);
         console.log(root.value);
         this.inOrder(root.right);
      }
  }

   
  postOrder(root){ 
    if(root){
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value);
    }
  }
    
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
bst.postOrder(bst.root);


