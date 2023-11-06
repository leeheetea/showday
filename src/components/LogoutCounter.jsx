import React, { useEffect, useState } from 'react';
import { logout } from '../page/ApiService';
import { useNavigate } from 'react-router-dom';

const LogoutCounter = () => {
    const INIT_TIME = 3600;
    const savedTime = localStorage.getItem("REMAINING_TIME");
    const initialTime = savedTime ? parseInt(savedTime, 10) : INIT_TIME;
    const [remainingTime, setRemainingTime] = useState(initialTime);
    let worker;
    const navigate = useNavigate();

    const [extendLogin, setExtendLogin] = useState(false);

    useEffect(() => {
        worker = new Worker('/workers/LogoutWorker.js');
        // console.log("new Worker()");

        const savedTime = localStorage.getItem("REMAINING_TIME");
        if (savedTime) {
            worker.postMessage({ type: 'setTime', time: parseInt(savedTime, 10) });
        } else {
            worker.postMessage({ type: 'setTime', time: INIT_TIME });
        }

        worker.onmessage = (event) => {
            if (event.data === 'logout') {
                logout()
                    .then(() => {
                        worker.terminate();
                        // window.location.href = "/";
                        navigate('/');
                    });
            } else {
                setRemainingTime(event.data);
                localStorage.setItem("REMAINING_TIME", event.data);
            }
        };

        return () => {
            worker.terminate();
            // console.log("worker.terminate()");
        };
    }, [extendLogin]);

    const resetINITTIME = () => {
        setRemainingTime(INIT_TIME);
        localStorage.setItem("REMAINING_TIME", INIT_TIME);
        if (worker) {
            worker.postMessage({ type: 'setTime', time: INIT_TIME });
        }
        setExtendLogin(prev => !prev);
    };

    return (
        <div>
            <span>{`${Math.floor(remainingTime / 60)}:${remainingTime % 60 < 10 ? '0' : ''}${remainingTime % 60}`}</span>
            <span onClick={resetINITTIME} className='search-container-menu-text'>로그인 연장</span>
        </div>
    );
}

export default LogoutCounter;
