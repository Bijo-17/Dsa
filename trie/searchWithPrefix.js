
class TrieNode{
    constructor(){
        this.children = {};
        this.endOfNode = false;
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
    searchWithPrefix(word){
        let node = this.root;

        for(let char of word){
           if(!node.children[char]){
            return false;
           }
           node = node.children[char];
        }
        return true;
    }


}

const trie = new Trie();

trie.insert('apple');
trie.insert('app');
trie.display();
console.log(trie.searchWithPrefix('app'));
