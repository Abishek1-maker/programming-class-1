let Time = new Date().getHours();
let Break;

switch (true) {
    case (Time >= 9 && Time < 11):
        Break = "runningclass";
        break;
    case (Time >= 11 && Time < 12):
        Break = "attendance";
        break;
    case (Time >= 12 && Time < 13):
        Break = "Breakfast Time";
        break;
    default:
        Break = "Unknown time";
        break;
}


if (Time >= 12 && Time < 13) {
    console.log(Break + " tiffin time");
} else {
    console.log("class is Running");
}