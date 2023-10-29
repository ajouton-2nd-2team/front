import Topbar from './Topbar';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Club = ({ club }) => {
    const [show, setShow] = useState(false);
    const [inquiry, setInquiry] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleInquiryShow = () => setInquiry(true);
    const handleInquiryClose = () => setInquiry(false);
    const [ablebutton, setAblebutton] = useState(true);
    const [ableName, setAbleName] = useState(false);
    const [ableMajor, setAbleMajor] = useState(false);
    const [ableNumber, setAbleNumber] = useState(false);
    const [ablePhone, setAblePhone] = useState(false);

    const [name, setName] = useState('');
    const [major, setMajor] = useState('');
    const [number, setNumber] = useState('');
    const [phone, setPhone] = useState('');


    const [token, setToken] = useState('');
    const [applyResult, setApplyResult] = useState();

    useEffect(() => {
        // 로컬 스토리지에서 토큰을 가져옴
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    });

    const handleSuccess = () => {
        const url = `https://api.example.com/data?clubId=1`;

        fetch(url, {
            method: 'POST',
            headers: {
                'X-ACCESS-TOKEN': {token},
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setApplyResult(data);
                // 데이터 처리
            })
            .catch(error => {
                console.error('API 요청 중 오류 발생:', error);
            });
        setShow(false);
    };

    const changeName = (e) => {
        setName(e.target.value);
        if (e.target.value === "") {
            setAbleName(false);
        }
        else {
            setAbleName(true);
        }
    }

    const changeMajor = (e) => {
        setMajor(e.target.value);
        if (e.target.value === "") {
            setAbleMajor(false);
        }
        else {
            setAbleMajor(true);
        }
    }

    const changeNumber = (e) => {
        setNumber(e.target.value);
        if (e.target.value === "") {
            setAbleNumber(false);
        }
        else {
            setAbleNumber(true);
        }
    }

    const changePhone = (e) => {
        setPhone(e.target.value);
        if (e.target.value === "") {
            setAblePhone(false);
        }
        else {
            setAblePhone(true);
        }
    }

    useEffect(() => {
        if (ableName === true && ableMajor === true && ableNumber === true && ablePhone === true) {
            setAblebutton(false);
        }
        else {
            setAblebutton(true);
        }
    }, [ableName, ableMajor, ableNumber, ablePhone]);

    return (
        <div>
            <Topbar fixed="top" />
            <div className="header">
                <h1 style={{ padding: '0 12%' }}>동아리 소개</h1>
                <h6 style={{ padding: '0 12%' }}>아주대학교 동아리에 대해 소개해드립니다</h6>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', margin: '20px 12%', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '400px', marginRight: '30px' }} >
                    <img src={club.img} className='image' style={{ marginBottom: "5%", width: '100%', height: '100%' }} />
                    <div className="infoButton" style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <button className='button' onClick={handleShow}>신청</button>
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
                                            className="ControlName"
                                            value={name}
                                            onInput={changeName}
                                        />
                                    </Form.Group>
                                    <Form.Group className="apply" controlId="input2">
                                        <Form.Label>학과</Form.Label>
                                        <Form.Control type="text"
                                            placeholder="소속 학과를 입력하세요"
                                            value={major}
                                            onInput={changeMajor} />
                                    </Form.Group>
                                    <Form.Group className="apply" controlId="input3">
                                        <Form.Label>학번</Form.Label>
                                        <Form.Control type="text"
                                            placeholder="학번을 입력하세요"
                                            value={number}
                                            onInput={changeNumber} />
                                    </Form.Group>
                                    <Form.Group className="apply" controlId="input2">
                                        <Form.Label>번호</Form.Label>
                                        <Form.Control type="text"
                                            placeholder="핸드폰 번호를 입력하세요"
                                            value={phone}
                                            onInput={changePhone} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="success" onClick={handleSuccess} disabled={ablebutton}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <button className='button' onClick={handleInquiryShow}>문의</button>
                        <Modal show={inquiry} onHide={handleInquiryClose}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Header closeButton>
                                <Modal.Title>문의하기</Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                                <Form style={{ display: "flex", justifyContent: "flex-start" }}>
                                    <Form.Group className="apply" controlId="input1">
                                        <Form.Label>이름</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="이름을 입력하세요"
                                            autoFocus
                                            required
                                            className="ControlName"
                                            value={name}
                                            onInput={changeName}
                                            style={{ width: "700px" }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="apply" controlId="input2">
                                        <Form.Label>연락처</Form.Label>
                                        <Form.Control type="text"
                                            placeholder="연락처를 입력하세요"
                                            value={major}
                                            onInput={changeMajor}
                                            style={{ width: "700px" }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>문의내용</Form.Label>
                                        <Form.Control
                                            placeholder="문의 내용을 입력하세요"
                                            value={number}
                                            onInput={changeNumber}
                                            as="textarea" rows={3}
                                            style={{ width: "700px", minHeight: "300px" }} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleInquiryClose}>
                                    Close
                                </Button>
                                <Button variant="success" onClick={handleInquiryClose} disabled={ablebutton}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <div>
                    <h1 style={{ color: "#059346", marginBottom: '30px' }}>{club.name}</h1>
                    <h2 style={{ color: "#059346", marginBottom: '20px' }}>동아리 설명</h2>
                    <p style={{ width: "900px", marginBottom: '30px' }}>{club.info}</p>
                    <h2 style={{ color: "#059346", marginBottom: '20px' }}>주요 활동</h2>
                    <p style={{ width: "900px", marginBottom: '30px' }}>{club.activity}</p>
                </div>
            </div>
        </div >
    )
}

export default Club;