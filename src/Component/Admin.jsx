import Topbar from './Topbar';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Students from './Students';
import Inquiries from './Inquiries';

const Admin = () => {

  return (
    <div>
      <Topbar fixed="top" />
      <div className="header">
        <h1 style={{ padding: '0 12%' }}>마이페이지</h1>
        <h6 style={{ padding: '0 12%' }}>안녕하세요 관리자님</h6>
      </div>
      <div  style={{margin: "20px 20px"}}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item >
                <Nav.Link eventKey="first">신청자 목록</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">문의 목록</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first"><Students /></Tab.Pane>
              <Tab.Pane eventKey="second"><Inquiries /></Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </div>
    </div>
  );
}

export default Admin;