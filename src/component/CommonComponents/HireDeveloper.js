import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import { HIREDEVELOPERCV } from '../../assets/images/Index';
import HireDeveloperCard from './HireDeveloperCard';

export default function HireDeveloper({ pageName }) {
    return (
        <div className="hire_developer_cv">
            <Container>
                <div className="section_1">
                    <Row>
                        <Col md={12}>
                            <HireDeveloperCard pageName={pageName} />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}