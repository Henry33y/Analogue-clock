const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

//Analogue Clock💪
let seconds=0,minutes=0,hours=0; //Initialize the hours, seconds, and minutes.
function updateClock(){
    const currentDate = new Date(); //get a new 'Date' object and assign it to the 'currentDate variable'
    console.log(currentDate);
    
    seconds=currentDate.getSeconds();//get the seconds from the 'Date' object and assign it to the 'seconds' variable
    minutes=currentDate.getMinutes();//get the minutes from the 'Date' object
    hours=currentDate.getHours();//get the hours from the 'Date' object
    console.log('seconds: '+seconds);
    console.log(minutes);
    console.log(hours);
    
    const secondRotation=seconds*6;
    const minuteRotation=minutes*6;
    const hourRotation=(hours%12)*30 +minutes/2;
    
    minuteHand.style.transform=`rotate(${minuteRotation}deg)`;
    hourHand.style.transform=`rotate(${hourRotation}deg)`;
    secondHand.style.transform=`rotate(${secondRotation}deg)`;
}
updateClock();
setInterval(updateClock,1000);

//STOPWATCH CODE💪

// const stopwatch=()=>{
//     seconds++; //increment the seconds value every second, when the `stopwatch` function in called
//    console.log(seconds);
//    secondHand.style.transform=`rotate(${seconds*6}deg)`//Increment the degree of rotation of the second hand by 6 every seceond.
//    if(seconds===60){
//         seconds=0;
//         minutes++;
//         minuteHand.style.transform=`rotate(${minutes*6}deg)`;
//     }
//    if(minutes===60){
//         minutes=0;
//         hours++;
//         hourHand.style.transform=`rotate(${hours*30}deg)`  
//     }
// }

// setInterval(stopwatch,1000);

