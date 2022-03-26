import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { statiSticApi } from './functions/statiSticApi';

function StatisticssH({ pageName }) {
    const [statiSticInformation, statiSticInfo] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                statiSticInfo(res)
            }
        }
        statiSticApi({}, pageName, setResponse)
        return () => isActive = false;
    }, [pageName])
    return (
        <div className="stastics_home">
            <Container>
                <Row className="mar_20">
                    {
                        statiSticInformation.length > 0 && statiSticInformation.map((items, i) => {
                            return (
                                <Col lg={2} md={2} sm={6} key={i}>
                                    <div className="ststic">
                                        <h1>{items.value}</h1>
                                        <h4>{items.label}</h4>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
export default StatisticssH