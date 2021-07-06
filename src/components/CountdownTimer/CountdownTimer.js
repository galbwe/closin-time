import React from 'react'
import { Box, Clock, Text } from 'grommet';

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


    let isoHour = formatWithLeadingZero(currentTime.hours);
    let isoMinutes = formatWithLeadingZero(currentTime.minutes);
    let isoSeconds = formatWithLeadingZero(currentTime.seconds);

    let isoStr = `T${isoHour}:${isoMinutes}:${isoSeconds}`;

    let isMorning = currentTime.hours < 12;

    let hours = Math.floor(secondsToClosingTime / 3600);
    secondsToClosingTime = secondsToClosingTime % 3600;
    let minutes = Math.floor(secondsToClosingTime / 60);
    let seconds = secondsToClosingTime % 60;

    let countdown = `T${formatWithLeadingZero(hours)}:${formatWithLeadingZero(minutes)}:${formatWithLeadingZero(seconds)}`;


    return (
        <Box
            background="light-5"
            direction="column"
            border
            width="50%"
        >
            <Box
                direction="row"
            >
                <Text>It's <Clock run={false} time={isoStr} type={"digital"} hourLimit={12}/> {isMorning ? 'AM' : 'PM'}</Text>
            </Box>
            <Box
                direction="row"
            >
                <Text><Clock run={false} time={countdown} type={"digital"}/> until Closin' Time</Text>
            </Box>
        </Box>
    )}

export default CountdownTimer