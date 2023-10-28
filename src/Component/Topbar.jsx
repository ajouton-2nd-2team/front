import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { clubs } from '../infor/clubs';
import { ajouclubs } from '../infor/ajouclubs';




const Topbar = () => {
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="정동아리" id="basic-nav-dropdown">
                            {clubs.map((club, index) => (
                                <NavDropdown.Item href={club.href}>{club.name}</NavDropdown.Item>
                            ))}

                        </NavDropdown>
                        <NavDropdown title="준동아리" id="basic-nav-dropdown">
                            {clubs.map((club, index) => (
                                <NavDropdown.Item href={club.href}>{club.name}</NavDropdown.Item>
                            ))}

                        </NavDropdown>
                        <NavDropdown title="소학회" id="basic-nav-dropdown">
                            {clubs.map((club, index) => (
                                <NavDropdown.Item href={club.href}>{club.name}</NavDropdown.Item>
                            ))}

                        </NavDropdown>
                        <NavDropdown title="연합동아리" id="basic-nav-dropdown">
                            {ajouclubs.map((club, index) => (
                                <NavDropdown.Item href={club.href}>{club.name}</NavDropdown.Item>
                            ))}

                        </NavDropdown>
                        <Nav.Link href="/concert">공연 정보</Nav.Link>
                        <Nav.Link href="/announce">공지사항</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={1} href="/login">
                            로그인
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar;