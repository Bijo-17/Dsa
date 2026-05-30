
class Node {
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

        this.insertNode(this.root,newNode);
    }

    min(root){
        if(root.left === null){
            return root.value;
        } else {
           return this.min(root.left);
        }
        
    }

    insertNode(root,newNode){
        if(root.value > newNode.value){

              if(root.left === null){
                 root.left = newNode;
              }  else {
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

     delete(value){
         this.root = this.deleteNode(this.root,value);
     }

     deleteNode(root,value){
        if(!root){
            return root;
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left,value);
        } else if(value > root.value){
            root.right = this.deleteNode(root.right,value);
        } else {
            if(!root.left && !root.right){
                return null;
            } 
 
            if(!root.left){
                return root.right;
            }
            
            if(!root.right){
                return root.left;
            }

            let minValue = this.min(root.right);
              root.value = minValue;
              root.right = this.deleteNode(root.right,minValue);
        }

        return root;
     }

    print(){
        console.log(this.root);
    }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(11);

bst.print();
bst.delete(10);
bst.print();