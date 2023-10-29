import Topbar from './Topbar';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Admin = () => {
  const [dummy, setDummy] = useState([
    { name: '황은비', department: '디지털미디어학과', stuNum: '202127235', phone: '010-1234-5678', date: '2023-10-25', state: '등록보류' },
    { name: '한소진', department: '소프트웨어학과', stuNum: '201920753', phone: '010-9876-5432', date: '2023-10-25', state: '등록완료' },
  ]);
  const [apply, setApply] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const storedToken = localStorage.getItem('token');


  function getToken() {
    // 로컬 스토리지에서 토큰을 가져옴
    const storedToken = localStorage.getItem('token');
    console.log("stor:", storedToken);
    if (storedToken) {
      fetchData(storedToken);
    }
  };

  function fetchData(token) {
    fetch('http://api.ajouthon.sheenji.com:8080/admins/formList', {
      method: 'GET', // POST 요청
      headers: {
        'X-ACCESS-TOKEN': token,
      },
    })
      .then(response => response.json())
      .then(data => {
        // 서버로부터의 응답 처리
        console.log(data);
        setApply(data.result);
        console.log(apply);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:', error);
      });
  }

  useEffect (() => {
    getToken();
  },[]);

  // fetchData 함수를 호출하여 데이터를 가져옵니다.

  const openModal = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedStudent(null);
    setIsModalOpen(false);
  };

  const handleCompleteRegistration = () => {
    const updatedDummy = dummy.map(student => {
      if (student.id === selectedStudent.id) {
        return { ...student, state: '등록완료' };
      }
      return student;
    });

    setDummy(updatedDummy);
    closeModal();
  };

  useEffect(() => {
  }, [dummy]);

  return (
    <div>
      <Topbar fixed="top" />
      <div className="header">
        <h1 style={{ padding: '0 12%' }}>마이페이지</h1>
        <h6 style={{ padding: '0 12%' }}>안녕하세요 관리자님</h6>
      </div>

      <table style={{ captionSide: 'top' }}>
        <caption style={{ color: '#059346', fontSize: '22px', fontWeight: 'bold', marginBottom: '5px' }}>동아리 신청 명단</caption>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>등록일</th>
            <th>등록여부</th>
          </tr>
        </thead>
        <tbody>
          {apply.map((applyList, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td style={{ textAlign: 'center' }}>{applyList.name}</td>
              <td>{applyList.uploadTime}</td>
              <td
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => openModal(applyList)}
              >
                {applyList.isAccept ? "등록완료" : "등록보류"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedStudent && (
        <Modal show={isModalOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>학생 정보</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <pre>   <b>이름</b>   |      {selectedStudent.name}</pre>
            <pre>   <b>학과</b>   |      {selectedStudent.department}</pre>
            <pre>   <b>학번</b>   |      {selectedStudent.stuNum}</pre>
            <pre>   <b>번호</b>   |      {selectedStudent.phone}</pre>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={closeModal}>
              등록보류
            </Button>
            <Button variant="success" onClick={handleCompleteRegistration}>
              등록완료
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Admin;
