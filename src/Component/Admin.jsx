import Topbar from './Topbar';

const Admin = () => {
  const dummy = [
    { id: 1, title: '가입신청', date: '2023-10-25', state: '등록보류' },
    { id: 2, title: '가입신청', date: '2023-10-25', state: '등록완료' },

  ]

  return (
    <div>
      <Topbar fixed="top" />
      <div className="header">
        <h1>마이페이지</h1>
        <h6>안녕하세요 관리자님</h6>
      </div>
      <table>
        <caption>동아리 신청명단</caption>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>등록일</th>
            <th>등록여부</th>
          </tr>
        </thead>
        <tbody>
          {dummy.map((applyList) => (
            <tr key={applyList.id}>
              <td>{applyList.id}</td>
              <td >{applyList.title}</td>
              <td>{applyList.date}</td>
              <td>{applyList.state}</td>
            </tr>
          ))}
        </tbody>
      </table>



    </div>


  )
}

export default Admin;