import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GlobalHeadingHardCoded from '../GlobalHeadingHardCoded'

function TechnologyStackHeading() {
    return (
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <GlobalHeadingHardCoded strong={`Technology`} span={`stack`} />
                </Col>
            </Row>
        </Container>
    )
}

export default TechnologyStackHeading
