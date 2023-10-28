import Topbar from './Topbar';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Club = ({ club }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ablebutton, setAblebutton] = useState(true);
    const [ableName, setAbleName] = useState(false);
    const [ableMajor, setAbleMajor] = useState(false);
    const [ableNumber, setAbleNumber] = useState(false);
    const [ablePhone, setAblePhone] = useState(false);

    const [name, setName] = useState('');
    const [major, setMajor] = useState('');
    const [number, setNumber] = useState('');
    const [phone, setPhone] = useState('');

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
        if (ableName===true && ableMajor === true && ableNumber === true && ablePhone ===true) {
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
                    <img src={club.img} className='image' style={{ width: '100%', height: '100%' }} />
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
                                            onInput={changeMajor}/>
                                    </Form.Group>
                                    <Form.Group className="apply" controlId="input3">
                                        <Form.Label>학번</Form.Label>
                                        <Form.Control type="text"
                                            placeholder="학번을 입력하세요" 
                                            value={number}
                                            onInput={changeNumber}/>
                                    </Form.Group>
                                    <Form.Group className="apply" controlId="input2">
                                        <Form.Label>번호</Form.Label>
                                        <Form.Control type="text"
                                            placeholder="핸드폰 번호를 입력하세요" 
                                            value={phone}
                                            onInput={changePhone}/>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="success" onClick={handleClose} disabled={ablebutton}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <button className='button'>문의</button>
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