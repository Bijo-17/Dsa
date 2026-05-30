
class TrieNode{
    constructor(){
         this.children = {};
         this.lastNode = false;
    }

}

class Trie{
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
        node.lastNode = true;
    }

    display(node = this.root , word = ''){
        if(node.lastNode){
            console.log(word);
        }
        
        for(let char in node.children){ 
        this.display(node.children[char],word+char);
      }
    }

};

const trie = new Trie();

trie.insert('Apple');
trie.insert('Apart');
trie.insert('Avocado');
trie.display();