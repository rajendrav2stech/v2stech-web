import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
// import { Assured_quality_code, Experienced_developers, High_performance_apps, Timely_delivery } from '../../assets/images/Index'
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import { weAreCommitForApi } from './functions/weAreCommitForApi';
import Statistics from './Statistics';

function WeAreCommitted({ pageName }) {
    const [weAreCommitForInformation, weAreCommitForInfo] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                weAreCommitForInfo(res)
            }
        }
        weAreCommitForApi({}, pageName, setResponse)
        return () => isActive = false;
    }, [pageName])
    return (
        <div className="we_are_commit_for">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading_h2_center text-center">
                            <h2><strong>We are committed for </strong></h2>
                        </div>
                    </div>
                </div>
                <Row>
                    {
                        weAreCommitForInformation.length > 0 && weAreCommitForInformation.map((items, i) => {
                            return (
                                <Col lg={3} md={3} sm={6} key={i} className="content_1_pad">
                                    <div className="content_1">
                                        <div className="pad">
                                            <img src={localDomain + items.image} alt={items.title} />
                                            <span>{items.title}</span>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Statistics pageName={pageName} />
            </div>
        </div>
    )
}

export default WeAreCommitted