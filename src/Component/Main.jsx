import Topbar from './Topbar';
import './Main.css';
import React, { useEffect, useState } from 'react';


const Main = () => {
    const [token, setToken] = useState('');

    useEffect(() => {
        // 로컬 스토리지에서 토큰을 가져옴
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);


    return (
        console.log(token),
        <div>
            <Topbar fixed="top" />
            <div className='mainContent'>
                <img src="./main1.jpg" className="main1" />
                <p className='mainP' >2023 - 우수동아리</p>
                <img src="./main2.jpg" className="main2" />
            </div>

        </div>
    )
}

export default Main;