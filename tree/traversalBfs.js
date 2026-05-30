

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

     bfs(){
        let queue = [];
        let result = [];

        queue.push(this.root);

        while(queue.length){
            let current = queue.shift();
       
            result.push(current.value);

            if(current.left){
                queue.push(current.left);
            }
                
             if(current.right){
                queue.push(current.right)
            }

        }

        console.log(result);
     }

     levelOrder(){
      
        let queue = [];

        queue.push(this.root);

        while(queue.length){

            let current = queue.shift();

            console.log(current.value);

            if(current.left){
                queue.push(current.left);
            }

            if(current.right){
                queue.push(current.right);
            }

        }


     }

   
    
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(11);
bst.insert(4);
bst.insert(2);

bst.levelOrder();

//       10
//     5    15
//   3  7  11
//     4 

