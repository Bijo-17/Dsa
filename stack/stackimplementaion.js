
class Stack{
     constructor(){
        this.stack = [];
     }

     push(value){
        this.stack.push(value);
     }

     pop(){

        if(this.isEmpty()){
            return console.log('stack is empty!');
        }
        this.stack.pop();
     }

     isEmpty(){
        return this.size() === 0;
     }

     size(){
        return this.stack.length;
     }

     seek(){
        if(this.isEmpty()){
            return console.log("stack is empty!");
        }

         return this.stack[this.size()-1];
     }

     printList(){
         let i = 0;
         let res = '';
        while(i < this.size()){
            res = res+this.stack[i]+'->';        
           i++;
        }
        console.log(res+'null');
        
     }

}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.seek());
console.log(stack.isEmpty());

stack.pop();
stack.push(50);
stack.printList();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.isEmpty());
