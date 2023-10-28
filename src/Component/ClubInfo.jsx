import Topbar from './Topbar';


const ClubInfo = ({ club }) => {
    return (
        <div>
            <Topbar fixed="top" />
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

export default ClubInfo;