
class MaxHeap {
    constructor(){
        this.heap  = [];
    }

    insert(value){
          
         this.heap.push(value);

         let index = this.heap.length-1;

         while(index > 0){

            let parentIndex = Math.floor((index-1)/2);

            if(this.heap[parentIndex] < this.heap[index]){
                [ this.heap[parentIndex] , this.heap[index] ] = [this.heap[index] , this.heap[parentIndex] ];
                 index = parentIndex;
            } else {
                break;
            }
            
         }
    }
}

const heap = new MaxHeap();
heap.insert(10);
heap.insert(20);
heap.insert(50);
heap.insert(40);
heap.insert(30);

console.log(heap.heap);