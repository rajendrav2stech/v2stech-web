import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import useApi from '../hooks/useApi';
import { domainApi } from './functions/domainApi';
import { statiSticApi } from './functions/statiSticApi';

export default function ProjectDetailsStaticStick({ pageName }) {
    const [statiSticInformation] = useApi(statiSticApi, pageName)
    const [domainInformation] = useApi(domainApi, pageName)
    return (
        <div className="project_details_staticStick">
            <Container>
                <Row>
                    <Col lg={7} md={7} sm={12}>
                        <div className="content">
                            <ul>
                                {
                                    statiSticInformation.length > 0 && statiSticInformation.map((items, i) => {
                                        return (
                                            <li key={i}>
                                                <strong>{items.value}</strong>
                                                <span>{items.label}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col lg={5} md={5} sm={12}>
                        <div className="domain">
                            <h5>Domain</h5>
                            <ul>
                                {
                                    domainInformation.length > 0 && domainInformation.map((itm, ii) => {
                                        return (
                                            <li key={ii}>
                                                <img src={localDomain + itm.image} alt={itm.title} />
                                                <span>{itm.title}</span>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
