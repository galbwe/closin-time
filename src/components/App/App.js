import React, { useState, useEffect } from 'react'

import CountdownTimer from '../CountdownTimer/CountdownTimer';
import ClosingTimeDisplay from '../ClosingTimeDisplay/ClosingTimeDisplay';


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

    return <CountdownTimer currentTime={{hours: 14, minutes: 23, seconds: 42}} target={closingTime} />

    // return (
    //     // if currentTime is before 5pm, display a countdown until closin' time
    //     // if currentTime is after 5pm, let the user know that it is closin' time
    //     currentTime.hours < closingTime.hours ? (
    //         <CountdownTimer currentTime={currentTime} target={closingTime} />
    //     ) : (
    //         <ClosingTimeDisplay />
    //     )
    // )
}

export default App