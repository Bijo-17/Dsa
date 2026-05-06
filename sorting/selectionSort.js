
const arr = [12,34,15,3,45,4];


function selectionSort(arr){
    for(let i=0 ; i<arr.length ; i++){
        let minIndex = i;
        for(let j=i+1 ; j<arr.length; j++){
            if(arr[minIndex]>arr[j]){
                 minIndex = j;
            }        
        }
        if(minIndex !==i){
            [arr[minIndex] , arr[i] ] = [arr[i] , arr[minIndex]]
        }
    }
    return arr;
}

console.log(selectionSort(arr));


// time compexity 0(n) - same for all;