
// leetcode Q: 225

class Stack{
    constructor(){
        this.q1 = []; 4
        this.q2 = []; 3
    }

    push(value){
        while(this.q1.length !== 0){
            this.q2.push(this.q1.shift());
        }
        this.q1.push(value);
        while(this.q2.length !== 0){
             this.q1.push(this.q2.shift());
        }
    }

    pop(){
        this.q1.shift();
    }
    top(){
        return this.q1[0];
    }
   printStack(){
     return this.q1;
   }
    
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.printStack());
console.log(stack.top());
stack.pop();
console.log(stack.printStack());
console.log(stack.top());