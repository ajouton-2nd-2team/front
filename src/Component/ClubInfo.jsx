import Topbar from './Topbar';


const ClubInfo = () => {
    return (
        <div>
            <Topbar fixed="top" />
            <div className="header">
                <h1>동아리 소개</h1>
                <h6>아주대학교 동아리에 대해 소개해드립니다</h6>
            </div>
            <div className="info" >
            </div>
        </div>
    )
}

export default ClubInfo;