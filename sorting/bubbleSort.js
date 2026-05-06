
let arr = [12, 3,35,23,14,10 ,7];

function bubbleSort(arr){ 
for(let i=0; i<arr.length ; i++){
    for(let j=0 ; j<arr.length-1-i ; j++){
        if(arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
}
     return arr;
    
}

console.log(bubbleSort(arr));


// complexity best case 0(n)
// worst case 0(n^2)