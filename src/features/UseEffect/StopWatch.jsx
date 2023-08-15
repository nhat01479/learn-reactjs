import React, { useEffect, useState } from 'react';


function StopWatch(props) {
    const [buttonText, setButtonText] = useState('Start');
    const [stopWatch, setStopWatch] = useState(10000);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setStopWatch(parseInt(stopWatch) + 1)
            }, 1000)
        }
        return () => {
            clearInterval(interval);
        }
    }, [isRunning, stopWatch]);

    const startStopWatch = () => {
        setIsRunning(isRunning ? false : true);
        setButtonText(buttonText === 'Start' ? 'Stop' : 'Start');

    }

    const hours = Math.floor(stopWatch / 3600);
    const minutes = Math.floor((stopWatch % 3600) / 60);
    const seconds = stopWatch % 60;

    return (
        <div className='container text-center'>
            <div>
                <h3>{String(hours).length === 1 ? '0' + hours : hours}:{String(minutes).length === 1 ? '0' + minutes : minutes}:{String(seconds).length === 1 ? '0' + seconds : seconds}</h3>
                <button className='btn btn-secondary' onClick={startStopWatch}>{buttonText}</button>
            </div>           
        </div>
    );
}

export default StopWatch;