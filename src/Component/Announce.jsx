import Topbar from './Topbar';


const Announce = () => {
    return (
        <div>
            <Topbar fixed="top" />
            <div className="header">
                <h1>공지사항</h1>
                <h6>아주대학교 동아리 공지사항을 알려드립니다.</h6>
            </div>
        </div>
    )
}

export default Announce;