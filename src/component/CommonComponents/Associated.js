import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AssociatedDetails from './AssociatedDetails';

const Associated = () => {

    return (
        <div className="ratting__section">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <AssociatedDetails />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export default Associated