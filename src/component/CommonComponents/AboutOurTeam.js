import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded'
import { TEAM3 } from '../../assets/images/Index'

export default function AboutOurTeam() {
    return (
        <div className="about_ou_team">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <GlobalHeadingHardCoded strong={`Our`} span={`Team`} />
                        <div className="our_team">
                            <img src={TEAM3} alt={`team`} />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
