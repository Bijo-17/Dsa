
class MaxHeap{
    constructor(){
        this.heap = [];

    }

    insert(value){
        this.heap.push(value);

        let index = this.heap.length-1;

        while(index){
            let parentIndex = Math.floor((index - 1)/2);

         if(this.heap[parentIndex] < this.heap[index]){
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        } else {
            break;
        }

        }
    }

     delete(){
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
      
         let index = 0;
         let length = this.heap.length;


         while(true){
            let left = 2 * index + 1;
            let right = 2 * index + 2; 
            
            let largest = index;

            if(left < length && this.heap[left] > this.heap[largest]){
                 largest = left;
            }

            if(right < length && this.heap[right] > this.heap[largest]){
                 largest = right;
            }

            if(index !== largest){
                [this.heap[index] , this.heap[largest]] = [this.heap[largest] , this.heap[index]];

                index = largest;
            } else {
                break;
            }
         }
         return max;
     }
}

const heap = new MaxHeap();
heap.insert(10);
heap.insert(20);
heap.insert(50);
heap.insert(30)
heap.insert(40);


console.log(heap.heap);

console.log(heap.delete());
console.log(heap.heap);