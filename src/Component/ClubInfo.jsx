import Topbar from './Topbar';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { scienceclub } from '../infor/clubs';
import { ajouclubs } from '../infor/ajouclubs';
import ClubCard from './ClubCard';

const ClubInfo = () => {
    const [category, setCategory] = useState(scienceclub);
    
    return (
        <div>
            <Topbar fixed="top" />
            <div className="header">
                <h1 style={{padding: '0 12%'}}>동아리 소개</h1>
                <h6 style={{padding: '0 12%'}}>아주대학교 동아리에 대해 소개해드립니다</h6>
            </div>
            <div className="info" style={{ padding: '0 12%' }}>
                <Button variant="outline-success" className="clubs" onClick={() => setCategory(scienceclub)}>과학기술분과</Button>{' '}
                <Button variant="outline-success" className="clubs" onClick={() => setCategory(ajouclubs)}>레저스포츠분과</Button>{' '}
                <Button variant="outline-success" className="clubs" onClick={() => setCategory(ajouclubs)}>사회활동분과</Button>{' '}
                <Button variant="outline-success" className="clubs" onClick={() => setCategory(ajouclubs)}>연행예술분과</Button>{' '}
                <Button variant="outline-success" className="clubs" onClick={() => setCategory(ajouclubs)}>종교분과</Button>{' '}
                <Button variant="outline-success" className="clubs" onClick={() => setCategory(ajouclubs)}>창작전시분과</Button>{' '}
                <Button variant="outline-success" className="clubs" onClick={() => setCategory(ajouclubs)}>체육분과</Button>{' '}
                <Button variant="outline-success" className="clubs" onClick={() => setCategory(ajouclubs)}>학술언론분과</Button>{' '}
                <Button variant="outline-success" className="clubs" onClick={() => setCategory(ajouclubs)}>준동아리</Button>{' '}
                <Button variant="outline-success" className="clubs" onClick={() => setCategory(ajouclubs)}>연합동아리</Button>{' '}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', padding: '0 12%' }}>
                {category.map((club, index) => (
                    <ClubCard club={club} />
                ))
                }
            </div>
        </div>
    )
}

export default ClubInfo;