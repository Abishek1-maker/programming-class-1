let day = new Date().getDay();
let dayName;
switch(day){
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
       break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}
if(day === 0 || day === 6){
    console.log(dayName + " There will be holiday");
}
else{
    console.log("Today is " + dayName);
}


// Or We can use alternative which i saw from chat gpt


// let day = new Date().getDay();
// let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let dayName = dayNames[day];

// if (day === 0 || day === 6) {
//     console.log(dayName + " There will be a holiday");
// } else {
//     console.log("Today is " + dayName);
// }
