
// given a sting s containing just the characters '(' , ')' , '{' , '}'
//  determine if the input string is valid.
// open brackets must be closed by the same type of brackets.
// open brackets must be closed in the correct order.

// input : '()'       -----> output: true;
// input : '([]{})'   -----> output: true;
// input : '( ]'      -----> output: false


function isValid(str){
    let stack = [];
    for(let i of str){
        
        if(i === '(' || i === '{' || i === '['){
            stack.push(i);
        } else if( i === ')' || i === '}' || i === ']') {

            if(stack.length < 1) return false;

            let last = stack.pop();

            if(  i === ')' && last !== '(' || 
                 i === '}' && last !== '{' ||
                 i === ']' && last !== '['
              ){
                  return false;
              }
        }
    }
    return stack.length === 0;
}

console.log(isValid('(),[{} ({ )]'));