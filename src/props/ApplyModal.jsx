import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ApplyModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        신청하기
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>신청하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="apply" controlId="input1">
              <Form.Label>이름</Form.Label>
              <Form.Control
                type="text"
                placeholder="이름을 입력하세요"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="apply" controlId="input2">
              <Form.Label>학과</Form.Label>
              <Form.Control type="text"
                placeholder="소속 학과를 입력하세요" />
            </Form.Group>
            <Form.Group className="apply" controlId="input3">
              <Form.Label>학번</Form.Label>
              <Form.Control type="text"
                placeholder="학번을 입력하세요" />
            </Form.Group>
            <Form.Group className="apply" controlId="input2">
              <Form.Label>번호</Form.Label>
              <Form.Control type="text"
                placeholder="핸드폰 번호를 입력하세요" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ApplyModal;