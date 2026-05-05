
function subset(arr){ 
  let result = [];
  let temp = [];
    function recsubset(arr,i){

        if(arr.length === i){
            return result.push([...temp]);
        }
        
         temp.push(arr[i]);
         recsubset(arr,i+1);
         temp.pop();
         recsubset(arr,i+1);
    }
     recsubset(arr,0);
     return result;
}



console.log(subset([1,2,3,4]));