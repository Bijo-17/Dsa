
var myQueue = function(){
    this.s1 = [];
    this.s2 = [];
}

myQueue.prototype.enqueue = function(value){
   this.s1.push(value)
}

myQueue.prototype.dequeue = function (){
    if(this.s2.length === 0){
        while(this.s1.length >0){ 
        this.s2.push(this.s1.pop());
        }
       
    }
     return this.s2.pop();
}

myQueue.prototype.front = function () {
    if(this.s2.length === 0){
        while(this.s1.length > 0){
            this.s2.push(this.s1.pop());
        }
      
    }
    return this.s2[this.s2.length-1];
}

myQueue.prototype.print = function (){
    return [...this.s1 , ...this.s2 ];
}

let queue = new myQueue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.front());
console.log(queue.print());
queue.dequeue();
queue.dequeue();
console.log(queue.front());
console.log(queue.print());