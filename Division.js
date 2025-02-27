function AddNumber(a,b){
    return a+b;
 }
 console.log(AddNumber(2,1));
 
 function SubNumber(a,b){
     return a-b
 }
 console.log(SubNumber(5,1));
 
 function multiply(a,b){
     return a*b;
 }
 console.log(multiply(3,5));
 function divide(a,b){
    return a/b;
 }
 console.log(divide(10,2));

 function action(type,a,b){

     switch(type){
         case 'add':
             return AddNumber(a,b);
             break;
             case 'Sub':
                 return SubNumber(a,b);
                 break;
                 case 'mul':
                     return multiply(a,b);
                     break;
                        case 'div':
                            if (b === 0 || b < 0 ) {
                                return 'Please input a value greater than 0 for b';
                            } else {
                                return divide(a, b);
                            }
                     default:
                         return 'Error';
     }
 }

 
 console.table([action('div',1,0)])