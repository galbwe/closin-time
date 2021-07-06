import React, { useState, useEffect } from 'react'
import { Grommet, Box, grommet, Grid, Header, Heading } from 'grommet';

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


    return (
        <Grommet theme={grommet}>
            <Grid
                rows={["xsmall", "full"]}
                columns={["full"]}
                gap="small"
                areas={[
                    {
                        name: "header",
                        start: [0, 0],
                        end: [0, 0],
                    },
                    {
                        name: "main",
                        start: [0, 1],
                        end: [0, 1],
                    },
                ]}
            >
                <Header
                    gridArea="header"
                    background="brand"
                    pad="xsmall"
                >
                    <Heading
                        margin="small"
                    >
                        Closin' Time
                    </Heading>
                </Header>
                <Box
                    gridArea="main"
                    background="light-2"
                >
                    <CountdownTimer currentTime={{hours: 14, minutes: 23, seconds: 42}} target={closingTime} />
                </Box>
            </Grid>
        </Grommet>
    )
}

export default App


                    {/* TODO: remove dummy timers and uncomment conditional rendering  */}

                {/* <CountdownTimer currentTime={{hours: 0, minutes: 23, seconds: 42}} target={closingTime} />

                <CountdownTimer currentTime={{hours: 0, minutes: 0, seconds: 0}} target={closingTime} />

                <CountdownTimer currentTime={{hours: 12, minutes: 0, seconds: 0}} target={closingTime} /> */}


                {/* if currentTime is before 5pm, display a countdown until closin' time
                if currentTime is after 5pm, let the user know that it is closin' time */}
                {/* {currentTime.hours < closingTime.hours ? (
                    <CountdownTimer currentTime={currentTime} target={closingTime} />
                ) : (
                    <ClosingTimeDisplay />
                )} */}
