import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactUsHeader from './ContactUsHeader'
function TopHeader() {
    return (
        <div className="top__header">
            <Container>
                <Row>
                    <Col className="top_head d-flex align-items-center justify-content-between">
                        <ContactUsHeader />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default TopHeader