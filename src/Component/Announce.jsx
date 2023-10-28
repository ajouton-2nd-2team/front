import Topbar from './Topbar';
import ListNumBtn from '../props/AnnLiBtn';
import './Announce.css';

const Announce = () => {
    const dummy = [
        { id : 60, title : '동아리 아주인의 밤 홍보 공모전', department : '온도', date : '2023-10-25'},
        { id : 59, title : '아주인의 밤, 학생 참여 부스모집', department : '온도', date : '2023-10-25'},
        { id : 58, title : '아주인의 밤, 아무말 현수막 공모전', department : '온도', date : '2023-10-25'},
        { id : 57, title : '온도와 함께하는 대여사업', department : '온도', date : '2023-10-25'},
        { id : 56, title : '2023년 제2회 전체동아리대표자회의', department : '온도', date : '2023-10-25'},
        { id : 55, title : '온도와 함께하는 물품대여사업', department : '온도', date : '2023-10-25'},
        { id : 54, title : '2023년도 동아리연합회 회칙 수정사항 공고', department : '온도', date : '2023-10-11'},
        { id : 53, title : '10월에 나누는 동아리연합회 캘린더', department : '온도', date : '2023-10-01'},
        { id : 52, title : '9월에 나누는 동아리연합회 소식지', department : '온도', date : '2023-10-01'},
        { id : 51, title : '2023-2 동아리박람회 이벤트 경품 추첨 결과', department : '온도', date : '2023-10-01'},
    ]
    return (
        <div>
            <Topbar fixed="top" />
            <div className="header">
                <h1>공지사항</h1>
                <h6>아주대학교 동아리 공지사항을 알려드립니다.</h6>
            </div>
            <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>공지 부서</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        {dummy.map((announceList) => (
          <tr key={announceList.id}>
            <td>{announceList.id}</td>
            <td >{announceList.title}</td>
            <td>{announceList.department}</td>
            <td>{announceList.date}</td>
          </tr>
        ))}
      </tbody>
    </table>

        <div className="liBtn">
            <ListNumBtn />
        </div>
            
        </div>
        
        
    )
}

export default Announce;