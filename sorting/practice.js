
const arr  = [17,12,15,16,11,13];


function sort(arr){

    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = sort(arr.slice(0,mid));
    let right = sort(arr.slice(mid));

    
       return srt(left, right)
                   
}

 function srt(left, right){

     let sortedArr = [];

     while(left.length && right.length){
         if(left[0] < right[0]){
             sortedArr.push(left.shift());
         } else {
            sortedArr.push(right.shift());
         }
     }
       
     return [...sortedArr,...left,...right];
 }
    
 
console.log(sort(arr)) 

