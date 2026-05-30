



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

   closestValue(target){
      let closest = this.root.value;
      let current = this.root;

      while(current){
         
          if(Math.abs(target-current.value) < Math.abs(target - closest)){
              closest = current.value;
          }


          if(target < current.value){
              current = current.left;
          } else if(target > current.value){
             current = current.right;
          } else {
            return current.value;
          }
      }
      return closest;
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

console.log(bst.closestValue(3));

