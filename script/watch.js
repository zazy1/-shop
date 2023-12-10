function watch(){
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let seconds=date.getSeconds();
    hour=plusZero(hour);
    minute=plusZero(minute);
    seconds=plusZero(seconds);
    console.log(hour + ":" + minute + ":" + seconds); 
    document.getElementById("watch").innerText = hour + ":" + minute + ":" + seconds;
    setTimeout(watch,1000);
}
function plusZero(number){
    if (number < 10){
        return "0" + number;
    } else{
        return number
    }
}
watch()