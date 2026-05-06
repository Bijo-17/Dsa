
// input: 'the sky is blue '  op=> 'blue is sky the'
// input: 'all is well' op=> 'well is all'
// leetcode Q:151

function reverseString(str){
    let s = str.split(' ');

    let stack = [];
    for(let i of s){
        stack.push(i);
    }
    
    let revStr = '';
  
    while(stack.length){

         const current = stack.pop();
         if(current){
            revStr += ' '+current;
         }
    }

    return revStr.trim();
}

console.log(reverseString('the sky   is blue '));