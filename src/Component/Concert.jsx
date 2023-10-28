import Topbar from './Topbar';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Concert = () => {


    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div>
            <Topbar fixed="top" />
            <div className="header">
                <h1 style={{padding: '0 12%'}}>공연 정보</h1>
                <h6 style={{padding: '0 12%'}}>아주대학교 동아리 공연 등 일정에 대해 안내해드립니다.</h6>
            </div>
            <Calendar value={date} onChange={handleDateChange} />
        </div>
    )
}

export default Concert;