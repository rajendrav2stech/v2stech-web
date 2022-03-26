import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import RattingDetails from './RattingDetails';

const Ratting = ({ pageName }) => {

    return (
        <div className="ratting__section">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <RattingDetails pageName={pageName} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

Ratting.protoType = {
    rattingId: PropTypes.string.isRequired
}

export default Ratting