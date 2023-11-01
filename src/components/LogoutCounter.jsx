import React, { useEffect, useState } from 'react'
import { logout } from '../page/ApiService';

const LogoutCounter = () => {
    const INIT_TIME = 3600;
    const savedTime = localStorage.getItem("REMAINING_TIME");
    const initialTime = savedTime ? parseInt(savedTime, 10) : INIT_TIME;
    const [remainingTime, setRemainingTime] = useState(initialTime);

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

    useEffect(() => {
        localStorage.setItem("REMAINING_TIME", remainingTime); // remainingTime이 변경될 때마다 로컬 저장소에 저장
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