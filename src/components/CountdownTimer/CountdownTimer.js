import React from 'react'
import { Box } from 'grommet';

const convertToSeconds = ({hours, minutes, seconds}) => {
    return 3600 * hours + 60 * minutes + seconds
}

const formatWithLeadingZero = (x) => {
    if (x < 10) {
        return `0${x}`;
    }
    return `${x}`;
}

const CountdownTimer = ({currentTime, target}) => {

    let secondsToClosingTime = convertToSeconds(target) - convertToSeconds(currentTime);

    let hours = Math.floor(secondsToClosingTime / 3600);
    secondsToClosingTime = secondsToClosingTime % 3600;
    let minutes = Math.floor(secondsToClosingTime / 60);
    let seconds = secondsToClosingTime % 60;
    let countdown = `${formatWithLeadingZero(hours)}:${formatWithLeadingZero(minutes)}:${formatWithLeadingZero(seconds)}`;

    let displayHour = currentTime.hours % 12 === 0 ? 12 : currentTime.hours % 12;
    displayHour = formatWithLeadingZero(displayHour);
    let displayMinutes = formatWithLeadingZero(currentTime.minutes);
    let displaySeconds = formatWithLeadingZero(currentTime.seconds);
    let civilianTimeSuffix = currentTime.hours < 12 ? 'AM' : 'PM';

    return (
        <Box>
            <p>It's {displayHour}:{displayMinutes}:{displaySeconds} {civilianTimeSuffix}</p>
            <p>{countdown} until Closin' Time</p>
        </Box>
    )}

export default CountdownTimer