
class MinHeap {
    constructor(){
        this.heap = [];
    }

    insert(value){
        this.heap.push(value);

        let index = this.heap.length-1;

        while(index){

            let parentIndex = Math.floor((index-1)/2);

            if(this.heap[parentIndex] >= this.heap[index] ){
                  [this.heap[parentIndex] , this.heap[index] ] = [ this.heap[index] , this.heap[parentIndex] ];
                  index = parentIndex;
            } else {
                break;
            }
            
        }
    }
}

const heap = new MinHeap();
heap.insert(20);
heap.insert(40);
heap.insert(15);
heap.insert(5);
heap.insert(17);

console.log(heap.heap);
