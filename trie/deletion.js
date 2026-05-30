
class TrieNode{
    constructor(){
        this.children = {};
        this.endOdNode = false;
    }
}

class Trie {
    constructor(){
       this.root = new TrieNode();
    }

    insert(word){
       let node = this.root;
       
       for(let char of word){
          if(!node.children[char]){
             node.children[char] = new TrieNode();
          }
          node = node.children[char];
       }
       node.endOfNode = true;
    }

    display(node=this.root,word=''){
       if(node.endOfNode){
           console.log(word);
       } 

       for(let char in node.children){
           this.display(node.children[char],word+char);
       }
    }

    deletion(word){
         this.deleteHelper(this.root,word,0);
    }
    
    deleteHelper(node,word,index){

         if(index === word.length){
            
              if(!node.endOfNode){
                return false;
              }

              node.endOfNode = false;

              return Object.keys(node.children).length === 0;
         }

         let char = word[index];

         let childNode = node.children[char];

         if(!childNode){
            return false;
         }

         let shouldDeleteChildren = this.deleteHelper(childNode,word,index+1);

         if(shouldDeleteChildren){

               delete node.children[char];
         }

          return (Object.keys(node.children).length === 0 && !node.endOfNode);
    }
    
}

const trie = new Trie();

trie.insert('Apple');
trie.insert('Apart');
trie.insert('App');

trie.display();

console.log("\n After deletion \n");
trie.deletion('App');

trie.display()