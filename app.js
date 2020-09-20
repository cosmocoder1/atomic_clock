 

 const setTime = (clock) => {
  const today = new Date();
  const hours = parseInt(today.getHours());
  const minutes = parseInt(today.getMinutes());
  const seconds = parseInt(today.getSeconds());
  
  let hourHand = document.querySelector(`.hour${clock}`);
  let minuteHand = document.querySelector(`.minute${clock}`);
  let secondHand = document.querySelector(`.second${clock}`);
  let adjustedHours = hours;
  let adjustedMinutes = minutes;
  

//determine current hour standard 12 hour format
  
  if (hours > 12) {
    adjustedHours -= 12;
  }
  if (clock === 1) {
    adjustedHours -= 2; 
  } else if (clock === 2) {
    adjustedHours += 1;
  } else if (clock === 3) {
    adjustedHours += 6;
  } else if (clock === 4) {
    adjustedHours += 8;
  } else if (clock === 6) {
    adjustedHours += 2;
  }

  

  // move hour hand from starting position of hands to destination hour
  if (adjustedHours < 9) {
    hourHand.style.transform = `rotate(-${(9 - adjustedHours) * 30}deg)`;
  } else if (adjustedHours > 9) {
    hourHand.style.transform = `rotate(${(adjustedHours - 9) * 30}deg)`;
  }
  

// move minute hand from starting position of hands to destination hour
if (minutes < 45) {
  minuteHand.style.transform = `rotate(-${(45 - minutes) * 6}deg)`;
} else if (minutes > 45) {
  minuteHand.style.transform = `rotate(${(minutes - 45) * 6}deg)`;
}


// move second hand from starting position of hands to destination hour
if (seconds < 45) {
  secondHand.style.transform = `rotate(-${(45 - seconds) * 6}deg)`;
} else if (seconds > 45) {
  secondHand.style.transform = `rotate(${(seconds - 45) * 6}deg)`;
  } 

  return true;
}
  
setInterval(function () {
  setTime(1);
  setTime(2);
  setTime(3);
  setTime(4);
  setTime(5);
  setTime(6);
}, 1000); 








/*

const setTime = () => {
  const today = new Date();
  const hours = parseInt(today.getHours());
  const minutes = parseInt(today.getMinutes());
  const seconds = parseInt(today.getSeconds());
  
  let hourHand = document.querySelector('.hour_hand');
  let minuteHand = document.querySelector('.minute_hand');
  let secondHand = document.querySelector('.second_hand');
  let adjustedHours = hours;
  

//determine current hour standard 12 hour format
  
  if (hours > 12) {
    adjustedHours -= 12;
  }
  // move hour hand from starting position of hands to destination hour
  if (adjustedHours < 9) {
    hourHand.style.transform = `rotate(-${(9 - adjustedHours) * 30}deg)`;
  } else if (adjustedHours > 9) {
    hourHand.style.transform = `rotate(${(adjustedHours - 9) * 30}deg)`;
  }
  

// move minute hand from starting position of hands to destination hour
if (minutes < 45) {
  minuteHand.style.transform = `rotate(-${(45 - minutes) * 6}deg)`;
} else if (minutes > 45) {
  minuteHand.style.transform = `rotate(${(minutes - 45) * 6}deg)`;
}


// move second hand from starting position of hands to destination hour
if (seconds < 45) {
  secondHand.style.transform = `rotate(-${(45 - seconds) * 6}deg)`;
} else if (seconds > 45) {
  secondHand.style.transform = `rotate(${(seconds - 45) * 6}deg)`;
  } 

  return true;
}
  
  
let run = setInterval(setTime, 1000);
  

run

*/


