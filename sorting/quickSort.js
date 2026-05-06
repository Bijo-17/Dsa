
// method 1;
// Time complexity - average Case & best case - 0(nlog n); , worst case - 0(n^2);
// space complexity - average case - 0(log n); , worst case - 0(n);

function quickSort(arr){

     if(arr.length <=1){
        return arr;
     }

    let pivot = arr[0];
    let left = [];
    let right = [];

    for(let i=1; i<arr.length;i++){

         if(arr[i] < pivot){
             left.push(arr[i]);
         } else {
             right.push(arr[i]);
         }

    }

    return [...quickSort(left),pivot,...quickSort(right)];

}

console.log(quickSort([13,44,23,74,10,56,64,49]));