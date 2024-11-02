import React, { useState, useEffect, useRef } from "react";

function My_Component () {

    const [isRunning, set_IsRunning] = useState(false);
    const [elapsedTime, set_ElapsedTime] = useState(0);
    let intervalId_Ref = useRef(null);
    const start_TimeRef = useRef(0);

    useEffect(() => {

        if (isRunning) {
            intervalId_Ref = setInterval(() => {
                set_ElapsedTime(Date.now() - start_TimeRef.current);
            }, 10);
        }

        return () => clearInterval(intervalId_Ref)

    }, [isRunning])


    const start = () => {
        set_IsRunning(true)
        start_TimeRef.current = Date.now() - elapsedTime;
    };

    const stop = () => set_IsRunning(false);

    const reset = () => {
        set_IsRunning(false);
        set_ElapsedTime(0);
    }

    const format_Time = () => {

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let miliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        miliseconds = String(miliseconds).padStart(2, "0")

        return `${minutes}:${seconds}:${miliseconds}`;
    }

    //const add_Zero = (num) => (num < 10 ? "0" : "") + num;

    return (
        <div>
            <h2>{format_Time()}</h2>

            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default My_Component