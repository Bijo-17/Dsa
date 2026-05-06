
class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(element){
        this.queue.push(element);
    }

    dequeue(){
       if(this.isEmpty()){
         return "underflow , cannot perform dequeue";
       }

       return this.queue.shift();
    }

    front(){
        if(this.isEmpty()){
            return "No elements in the queue";
        }

        return this.queue[0];
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    printQueue(){
        let res = '';

        for(let i=0 ; i<this.queue.length ; i++){
            res += this.queue[i]+' ';
        }
       
        console.log('Queue: ',res);


    }
}

const queue = new Queue;

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.printQueue();
queue.dequeue();
queue.printQueue();
console.log(queue.front());