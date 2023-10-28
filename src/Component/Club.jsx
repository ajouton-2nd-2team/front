import Topbar from './Topbar';


const Club = ({ club }) => {
    return (
        <div>
            <Topbar fixed="top" />
            <div className="header">
                <h1 style={{ padding: '0 12%' }}>동아리 소개</h1>
                <h6 style={{ padding: '0 12%' }}>아주대학교 동아리에 대해 소개해드립니다</h6>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', margin: '20px 12%', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '400px', marginRight: '30px' }} >
                    <img src={club.img} className='image' style={{ width: '100%', height: '100%' }} />
                    <div className="infoButton" style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <button className='button'>신청</button>
                        <button className='button'>문의</button>
                    </div>
                </div>
                <div>
                    <h1 style={{ color: "#059346", marginBottom: '30px' }}>{club.name}</h1>
                    <h2 style={{ color: "#059346", marginBottom: '20px' }}>동아리 설명</h2>
                    <p style={{ width: "900px", marginBottom: '30px' }}>{club.info}</p>
                    <h2 style={{ color: "#059346", marginBottom: '20px' }}>주요 활동</h2>
                    <p style={{ width: "900px", marginBottom: '30px' }}>{club.activity}</p>
                </div>
            </div>
        </div >
    )
}

export default Club;