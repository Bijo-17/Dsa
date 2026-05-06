// leetcode Q:622
// Q1: circular Queue implementation
// Design your implementation of the circular queue. The circular queue is a 
// linear data structure in which the operations are performed based on First in First Out
// principle, and the last position is connected back to the frist position to make a circle.

var circularQueue = function(size){
      this.queue = [];
      this.size = size;
}

circularQueue.prototype.enqueue = function(value){
     if(this.size === this.queue.length) return false;

     this.queue.push(value);
     return true;
}

circularQueue.prototype.dequeue = function(){
     if(this.isEmpty()) return false;
     this.queue.shift();
     return true;
}

circularQueue.prototype.Front = function(){
     if(this.queue.length === 0) return -1;

     return this.queue[0];
}

circularQueue.prototype.Rear = function(){
     if(this.queue.length === 0) return -1;
     return this.queue[this.queue.length-1];
}

circularQueue.prototype.isEmpty = function(){
     return this.queue.length === 0;
}

circularQueue.prototype.isFull = function(){
     return this.queue.length === this.size;
}

circularQueue.prototype.printQueue = function(){
      console.log(this.queue);
}

const obj = new circularQueue(3);
obj.enqueue(10);
obj.enqueue(20);
obj.enqueue(30);
obj.enqueue(40);
obj.printQueue();
obj.dequeue();
obj.printQueue();
obj.enqueue(40);
obj.printQueue()

console.log(obj.Front() , obj.Rear());

