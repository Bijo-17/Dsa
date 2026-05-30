
class Heap {
    constructor(){
      this.heap = [];

    }

    insert(value){

        this.heap.push(value);
      
         let index = this.heap.length-1;

         while(index){
            let parentIndex = Math.floor((index-1)/2);

             if(this.heap[parentIndex] > this.heap[index]){
                [this.heap[index] , this.heap[parentIndex]] = [ this.heap[parentIndex] , this.heap[index]];
                index = parentIndex;
             } else {
                break;
             }
         }

    }

    deletion(){

        if(this.heap.length === 0){
            return null;
        }
        if(this.heap.length === 1){
           return this.heap.pop();
        }

        let min = this.heap[0];

        this.heap[0] = this.heap.pop();
        let index = 0;
        let length = this.heap.length;

        while(true){
            let left = (index * 2 )  + 1;
            let right = (index * 2) + 2;
            let smallest = index;

            if(left < length && this.heap[left] < this.heap[smallest] ){
                   smallest = left;
            }

            if(right < length && this.heap[right] < this.heap[smallest]){
                 smallest = right;
            }

            if(index !== smallest){
                [this.heap[index] , this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else {
                break;
            }
        }
         return min;
    }
        
}

const heap = new Heap();
heap.insert(50);
heap.insert(40);
heap.insert(10);
heap.insert(30);
heap.insert(20);

console.log(heap.heap);

console.log(heap.deletion());
console.log(heap.heap);