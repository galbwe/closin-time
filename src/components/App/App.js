import React, { useState, useEffect } from 'react'
import { Grommet } from 'grommet';

import CountdownTimer from '../CountdownTimer/CountdownTimer';
import ClosingTimeDisplay from '../ClosingTimeDisplay/ClosingTimeDisplay';

const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '14px',
        height: '20px',
      },
    },
  };


const getCurrentTime = () => {
    let now = new Date();
    return {
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
    }
}


const App = () => {
    let [currentTime, setCurrentTime] = useState(getCurrentTime())

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentTime(getCurrentTime());
        }, 1000)
        return () => clearTimeout(timer)
    })

    let closingTime = {
        hours: 17,
        minutes: 0,
        seconds: 0,
    };  // 5 pm


    return (
        <Grommet theme={theme}>

            {/* TODO: remove dummy timers and uncomment conditional rendering  */}
          <CountdownTimer currentTime={{hours: 14, minutes: 23, seconds: 42}} target={closingTime} />

          <CountdownTimer currentTime={{hours: 0, minutes: 23, seconds: 42}} target={closingTime} />

          <CountdownTimer currentTime={{hours: 0, minutes: 0, seconds: 0}} target={closingTime} />

          <CountdownTimer currentTime={{hours: 12, minutes: 0, seconds: 0}} target={closingTime} />


          {/* if currentTime is before 5pm, display a countdown until closin' time
          if currentTime is after 5pm, let the user know that it is closin' time */}
         {/* {currentTime.hours < closingTime.hours ? (
            <CountdownTimer currentTime={currentTime} target={closingTime} />
         ) : (
             <ClosingTimeDisplay />
         )} */}

        </Grommet>
    )
}

export default App