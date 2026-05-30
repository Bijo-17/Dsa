
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BinarySearchTree{
    constructor(){
        this.root  = null;
    }

    insert(value){
        
        const newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return;
        }

        let current = this.root;

        while(true){
            if(value < current.value){
                if(current.left === null){
                     current.left = newNode;
                     return;
                }

                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return;
                }

                current = current.right;

            }
        }

    }

     isEmpty(){
        return this.root === null;
     }

    print(){
        console.log(this.root);
    }

    // insert recursively;

    recInsert(value){
         
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
            return;
        }
          
         this.recInsertNode(this.root , newNode)       
           
    }

     recInsertNode(root,newNode){
       
           if(newNode.value < root.value){
               if(root.left === null){
                   root.left = newNode;
                   
               } else {
                   this.recInsertNode(root.left , newNode);
               }
           } else {
               if(root.right === null){
                 root.right = newNode;
               } else {
                  this.recInsertNode(root.right , newNode);
               }
           }
     }

     search(root,value){

        if(!root){
            return false;
        } else {
            if(root.value === value){
                return true
            } else if(root.value > value) {
                 return this.search(root.left,value);
            } else {
                 return this.search(root.right,value);
            }
        }

  }

}

const bst = new BinarySearchTree();
console.log(bst.isEmpty())
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(20);
bst.recInsert(7);
bst.recInsert(14);
bst.insert(4);
console.log(bst.isEmpty());
bst.print();

console.log(bst.search(bst.root,14))
console.log(bst.search(bst.root,20))
console.log(bst.search(bst.root,15))





