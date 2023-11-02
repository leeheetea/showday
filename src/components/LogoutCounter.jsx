import React, { useEffect, useState } from 'react';
import { logout } from '../page/ApiService';

const LogoutCounter = () => {
    const INIT_TIME = 3600;
    const savedTime = localStorage.getItem("REMAINING_TIME");
    const initialTime = savedTime ? parseInt(savedTime, 10) : INIT_TIME;
    const [remainingTime, setRemainingTime] = useState(initialTime);
    let worker;

    useEffect(() => {
        worker = new Worker('/workers/LogoutWorker.js');

        const savedTime = localStorage.getItem("REMAINING_TIME");
        if (savedTime) {
            worker.postMessage({ type: 'setTime', time: parseInt(savedTime, 10) });
        } else {
            worker.postMessage({ type: 'setTime', time: INIT_TIME});
        }

        worker.onmessage = (event) => {
            if (event.data === 'logout') {
                logout()
                    .then(() => {
                        window.location.href = "/";
                    });
            } else {
                setRemainingTime(event.data);
                localStorage.setItem("REMAINING_TIME", event.data);
            }
        };

        return () => {
            worker.terminate();
        };
    }, []);

    const resetINITTIME = () => {
        setRemainingTime(INIT_TIME);
        if (worker) {
            worker.postMessage({ type: 'setTime', time: INIT_TIME });
        }
    }

    return (
        <div>
            <span>{`${Math.floor(remainingTime / 60)}:${remainingTime % 60 < 10 ? '0' : ''}${remainingTime % 60}`}</span>
            <span onClick={resetINITTIME} className='search-container-menu-text'>로그인 연장</span>
        </div>
    );
}

export default LogoutCounter;
