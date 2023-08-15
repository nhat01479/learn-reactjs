import React, { useEffect, useState }  from 'react';


function CountDown(props) {
    const [timeLeft, setTimeLeft] = useState(10);
    const [isRunning, setIsRunning] = useState(false);
    const [buttonText, setButtonText] = useState('Start');

    useEffect(() => {
        let interval;
        if(isRunning && timeLeft) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
                console.log(timeLeft);
            }, 1000);
        }
        
        return () => {
            clearInterval(interval);
        }
    }, [isRunning, timeLeft])

    const startCountDown = () => {
        setIsRunning(isRunning ? false : true);
        setButtonText(buttonText === 'Start' ? 'Stop' : 'Start')
    }
    return (
        <div className='container text-center'>
            <div>
                <h3>{timeLeft}</h3>
                <button className='btn btn-dark' onClick={startCountDown}>{buttonText}</button>
                <button className='btn btn-secondary' onClick={() => {setTimeLeft(30)}}>Reset</button>
            </div>           
        </div>
    );
}

export default CountDown;