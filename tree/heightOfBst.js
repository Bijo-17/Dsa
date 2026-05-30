

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

     heightOfBst(root){

        if(!root) return -1;

        let leftHeight = this.heightOfBst(root.left);
        let rightHeight = this.heightOfBst(root.right);

        return Math.max(leftHeight,rightHeight)+1;

     }

 }
    
const bst = new BinarySearchTree();    

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(12);

console.log(bst.heightOfBst(bst.root));