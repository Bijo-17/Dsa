
// reverse a stack using another stack

class Stack {

     constructor(){
        this.s1 = [];
        this.s2 = [];
     }

     push(value){
        this.s1.push(value);
     }
     pop(){
        if(this.s1.length < 1){
           return console.log('Stack is empty!');
        }
        this.s1.pop();
     }

     print(){
        return console.log(this.s1);
     }

     reverse(){
       
         while(this.s1.length > 0){
            let temp = this.s1.pop();

         
         while(this.s2.length > 0 && this.s2[this.s2.length-1] > temp){
             this.s1.push(this.s2.pop());
         }
         this.s2.push(temp);
        }

         console.log(this.s2);
     }
    
}

const stack = new Stack();
stack.push(10);
stack.push(40);
stack.push(15);
stack.push(22);
stack.push(33);
stack.print();
stack.pop();
stack.print();
stack.reverse();