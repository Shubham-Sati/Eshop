import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navlinks from '../NavLinks/Navlinks';
import Avatar from '../Avatar/Avatar';

const Header = () => {
  return (
    <Container fluid className='header'>
      <Row>
        <Col>Eshop</Col>
        <Col xs={6}>
            <Navlinks />
        </Col>
        <Col>
            <Avatar />
        </Col>
      </Row>
    </Container>
  )
}

export default Header;