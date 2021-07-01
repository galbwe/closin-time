import React from 'react'

const convertToSeconds = ({hours, minutes, seconds}) => {
    return 3600 * hours + 60 * minutes + seconds
}

const CountdownTimer = ({currentTime, target}) => {
    let secondsToClosingTime = convertToSeconds(target) - convertToSeconds(currentTime);
    let hours = Math.floor(secondsToClosingTime / 3600);
    secondsToClosingTime = secondsToClosingTime % 3600;
    let minutes = Math.floor(secondsToClosingTime / 60);
    let seconds = secondsToClosingTime % 60;

    return (
        <div>
            <p>{hours}:{minutes}:{seconds} until Closin' Time</p>
        </div>
    )}

export default CountdownTimer