import Topbar from './Topbar';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Admin = () => {
  const [dummy, setDummy] = useState([
    { name: '황은비', department: '디지털미디어학과', stuNum: '202127235', phone: '010-1234-5678', date: '2023-10-25', state: '등록보류' },
    { name: '한소진', department: '소프트웨어학과', stuNum: '201920753', phone: '010-9876-5432', date: '2023-10-25', state: '등록완료' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

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
            <th>제목</th>
            <th>등록일</th>
            <th>등록여부</th>
          </tr>
        </thead>
        <tbody>
          {dummy.map((applyList,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td style={{ textAlign: 'center' }}>{applyList.name}</td>
              <td>가입신청</td>
              <td>{applyList.date}</td>
              <td
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => openModal(applyList)}
              >
                {applyList.state}
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
