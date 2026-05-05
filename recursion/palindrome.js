
function palindrome(x){

   let str = x.toString();

   function rev(str){
     if(str.length < 1){
        return '';
     }
     
       return str[str.length-1] + rev(str.slice(0,-1)); 
   }
  let res = rev(str);
   if(res === str){
    return true
   } else {
     return false;
   }

}

console.log(palindrome(121));

// method 2

function isPalindrome(str){
    str = str.toString();

     if(str.length<2) return '';
  
     if(str[0] !== str[str.length-1]){
        return false;
     }

       isPalindrome(str.slice(1,-1));

      return true;

}

console.log(isPalindrome('121'));