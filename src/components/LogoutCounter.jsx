import React, { useEffect, useState } from 'react'
import { logout } from '../page/ApiService';

const LogoutCounter = () => {
    const INIT_TIME = 10;
    const [remainingTime, setRemainingTime] = useState(INIT_TIME);

    useEffect(() => {
        const countDown = setInterval(() => {
            setRemainingTime((prev) => {
                if (prev === 1) {
                    logout()
                        .then(() => {
                            window.location.href = "/";
                        });
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => {
            clearTimeout(countDown);
        }
    }, [remainingTime]);

    const resetINITTIME = () => {
        setRemainingTime(INIT_TIME);
    }

    return (
        <div>
            <span>{`${Math.floor(remainingTime / 60)}:${remainingTime % 60 < 10 ? '0' : ''}${remainingTime % 60}`}</span>
            <span onClick={resetINITTIME} className='search-container-menu-text'>로그인 연장</span>
        </div>);
}

export default LogoutCounter