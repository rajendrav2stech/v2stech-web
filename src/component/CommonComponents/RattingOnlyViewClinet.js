import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import RattingDetailsOnlyViewClinet from './RattingDetailsOnlyViewClinet';

const RattingOnlyViewClinet = ({ pageName }) => {

    return (
        <div className="ratting__section">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <RattingDetailsOnlyViewClinet pageName={pageName} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

RattingOnlyViewClinet.protoType = {
    rattingId: PropTypes.string.isRequired
}

export default RattingOnlyViewClinet