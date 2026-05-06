
var Stack = function (){
     this.s1 = [];
    
}

Stack.prototype.reverse = function (str){
   
       let res = '';

       for(let i=0; i<str.length; i++){
          if(str[i] !== ' '){
             this.s1.push(str[i]);
          } else {
             while(this.s1.length > 0){
                 res += this.s1.pop();
             }
             res += ' ';
          }
       }
        while(this.s1.length>0){
             res += this.s1.pop();
        }
        return res;
}

let str = 'Hello my World buddy';
const stack = new Stack();
let ans = stack.reverse(str);
console.log(ans);