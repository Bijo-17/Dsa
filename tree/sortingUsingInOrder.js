
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

     inOrder(root,res){

        if(root){
            this.inOrder(root.left,res);
             res.push(root.value);
            this.inOrder(root.right,res);
        }
     }

    }



    const arr = [13,15,11,14,12];

    function treeSort(arr){
        let bst = new BinarySearchTree();
        for(let value of arr){
            bst.insert(value);
        }
        let res = [];
        bst.inOrder(bst.root,res);
        return res;
    }

    console.log(treeSort(arr));

