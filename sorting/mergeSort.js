
const arr = [23,14,8,35,56,42];

function mergeSort(arr){
   if(arr.length <= 1) return arr;

   let mid = Math.floor(arr.length/2);

   let left =  mergeSort(arr.slice(0,mid));
   let right = mergeSort(arr.slice(mid));

   return sort(left, right);
}

function sort(left,right){
    let sortedArr = [];

     while(left.length && right.length){
        if(left[0]<right[0]){
             sortedArr.push(left.shift());
        } else {
             sortedArr.push(right.shift()); 
        }
     }
     return [...sortedArr ,...left , ...right];
}

console.log(mergeSort(arr));

// time complexity 0(n log n);
// space complexity 0(n);

// quick sort worst case 0(n^2); best and average = 0(nlogn)