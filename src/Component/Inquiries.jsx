import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Students = () => {
  const [dummy, setDummy] = useState([
    { name: '황은비', email: '123@ajou.ac.kr', info: '배고프다', state: '문의보류' },
    { name: '한소진', email: '456@ajou.ac.kr', info: '배고프다',   state: '문의완료' },
  ]);
  const [apply, setApply] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
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
      <table style={{ captionSide: 'top' }}>
        <caption style={{ color: '#059346', fontSize: '22px', fontWeight: 'bold', marginBottom: '5px' }}>문의 목록</caption>
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
                {applyList.isAccept ? "문의완료" : "문의보류"}
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
            <pre>   <b>이메일</b>   |      {selectedStudent.department}</pre>
            <pre>   <b>문의내용</b>   |      {selectedStudent.stuNum}</pre>
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

export default Students;
