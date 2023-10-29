import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from 'react';




const Topbar = () => {

    const [token, setToken] = useState('');

    useEffect(() => {
        // 로컬 스토리지에서 토큰을 가져옴
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    });
    const logout = () => {
        setToken(null);
        localStorage.clear();
    }

    return (
        <div >
            <Navbar bg="light" data-bs-theme="light" className="Navbar">
                <Container>
                    <Navbar.Brand href="/"><img src="./modong.png" className="NavbarImg" /></Navbar.Brand>
                    <Nav className="me-auto">{/* 
                        <NavDropdown title="동아리 소개" id="basic-nav-dropdown">
                            {clubs.map((club, index) => (
                                <NavDropdown.Item href={club.href}>{club.name}</NavDropdown.Item>
                            ))}

                        </NavDropdown> */}
                        <Nav.Link href="/clubinfo" className="navbarName">동아리 소개</Nav.Link>
                        <Nav.Link href="/concert" className="navbarName">공연 정보</Nav.Link>
                        <Nav.Link href="/announce" className="navbarName">공지사항</Nav.Link>
                    </Nav>
                    <Nav>
                        {token ?
                            (
                                <button eventKey={1} onClick={logout} style={{border: "none", backgroundColor: "white"}}>
                                    로그아웃
                                </button>
                            )
                            :
                            (
                                <Nav.Link eventKey={1} href="/login">
                                    로그인
                                </Nav.Link>
                            )
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar;