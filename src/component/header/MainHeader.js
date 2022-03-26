import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

function MainHeader() {
    return (
        <div className="main__header">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="navbar">
                            <Logo />
                            <nav className="nav">
                                <MegaMenu />
                                <MobileMenu />
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}
export default MainHeader