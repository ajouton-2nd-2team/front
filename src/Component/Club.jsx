import Topbar from './Topbar';


const Club = ({ club }) => {
    return (
        <div>
            <Topbar fixed="top" />
            <div className="header">
                <h1>동아리 소개</h1>
                <h6>아주대학교 동아리에 대해 소개해드립니다</h6>
            </div>
            <div className="info" >
                <img src={club.img} className='image' />
                <div className="infoButton">
                    <button className='button'>신청</button>
                    <button className='button'>문의</button>
                </div>
            </div>
        </div>
    )
}

export default Club;