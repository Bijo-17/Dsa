
function revString(str){
   
     if(str === ''){
        return '';
     }

     return revString(str.substr(1)) + str.charAt(0);

}

console.log(revString('hello'));

// method 2

function revStr1(str){
    str = str.toString();

    if(str.length < 1) return '';

    return str[str.length-1] + revStr1(str.slice(0,-1));
}

console.log(revStr1("Hello world"));

//  method 3 without inbuild method

function revStr2(str,index){
     str = str.toString();

     if(index === undefined) {
       index = str.length-1;
     }

      if(index < 0) return '';

     return str[index] + revStr2(str,index-1);
}

console.log(revStr2('Welcome to my world'));
