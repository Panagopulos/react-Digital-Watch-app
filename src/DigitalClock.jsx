import React, {useState, useEffect} from 'react';

function DigitalClock() {

  const [time,setTime] = useState(new Date());
//Setting a useEffect with variable intervalId which is using setInterval callback to set the current time every 1sec. 
  useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date())
    }, 1000);

    return () => {
      clearInterval(intervalId);  //Clean up to prevent errors and unwanted behaviours
    }
  }, []);

    //function which is used in html section as js to show the current time with am or pm (military time) using modulo to change it correctly to 12-12 hour time
  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiam = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero (seconds)} ${padZero(meridiam)}`    
  }
  
  // Function for checking if the number is less then than so it can add a zero before the time number so its not just a 1 or 8 but 08 - 01.
  function padZero(number) {
    return (number < 10 ? '0' : '') + number
  }

  //html 
  return (
    <div className='clock-container'>
      <div className='clock'>
        <span>{formatTime()}</span>
      </div>
    </div>
  )

}

export default DigitalClock;