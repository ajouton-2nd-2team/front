import Topbar from './Topbar';

import React, { useState } from 'react';
import { Badge, Calendar } from 'antd';


const getListData = (value) => {
    console.log("value: ", value);
    let listData;
    if (value.month() === 9 && value.date() === 8) {
        listData = [
            { type: 'warning', content: 'Capo' },
            { type: 'success', content: 'Soul' },
        ];
    };
    if (value.month() === 9 && value.date() === 10) {
        listData = [
            { type: 'warning', content: '아몽극회' },
        ];
    };
    if (value.month() === 9 && value.date() === 29) {
        listData = [
            { type: 'warning', content: '카포' },
            { type: 'success', content: 'GDSC' },
        ];
    };
    return listData || [];
};

const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

const Concert = () => {
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    return (
        <div>
            <Topbar fixed="top" />
            <div className="header">
                <h1 style={{ padding: '0 12%' }}>공연 정보</h1>
                <h6 style={{ padding: '0 12%' }}>아주대학교 동아리 공연 등 일정에 대해 안내해드립니다.</h6>
            </div>
            <div style={{ margin: "20px 12%", display: "flex", flexDirection: "row" }}>
                <div style={{ width: "80%", height: "80%"}}>
                    <Calendar cellRender={cellRender} style={{ fontSize: "1.2em" }} />
                </div>
                <div style={{ width: "40%", height: "700px", marginLeft: "4%", border: "1px solid gray", borderRadius: "10px", padding: "10px" }}>
                    <h1 style={{marginBottom : "20px"}}>오늘의 일정</h1>
                    <div style={{ display: "flex", flexDirection: "row", marginBotton: "10px"}}>
                        <img src="./카포.png" style={{ marginRight: "2%" }} />
                        <div>
                            <h1>카포</h1>
                            <p style={{ fontSize: "1.2em" }}>일시 : 10월 29일 오후 2시<br />장소 : 광교호수공원 나루터 매점 앞<br />소개 : 음악을 사랑하는 사람이라면 누구나 참여할 수 있는 카포의 가을 버스킹에 함께 해요!</p>
                        </div>
                    </div>
                    <hr />
                    <div style={{ display: "flex", flexDirection: "row", }}>
                        <img src="./아주톤.png" style={{ marginRight: "2%" }} />
                        <div>
                            <h1>아주톤</h1>
                            <p style={{ fontSize: "1.2em" }}>일시 : 10월 28일 오후 1시<br/>장소 : 팔달관 308호<br/>소개 : 소프트웨어 개발에 관심있는 아주대학교 학생들이 제한된 시간 동안 팀을 이뤄 주어진 주제를 제한된 시간 동안 팀을 이뤄 주어진 주제를 해결할 수 있는 창의적인 소프트웨어를 개발하는 개발 경연 대회</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Concert;