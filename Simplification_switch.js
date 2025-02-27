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
function action(type,a,b){
    if(a>0 && b>0){
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
                    default:
                        return 'Error';
    }
}
else{
    return 'error';
}
}
console.table([action('add',5,0)])