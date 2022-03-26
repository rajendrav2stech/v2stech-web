import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import useApi from '../hooks/useApi';
import ContentBreack from './ContentBreack';
import { projectBannerApi } from './functions/projectBannerApi';

export default function ProjectDetailsBanner({ pageName }) {
    const [projectBannerInformation] = useApi(projectBannerApi, pageName)
    return (
        <div>
            <div className="project_details_banner">
                <Container>
                    <Row>
                        <Col>
                            {
                                projectBannerInformation.length > 0 && projectBannerInformation.map((itms, i) => {
                                    return (
                                        <div className="content" key={i}>
                                            {itms.image ? <img src={localDomain + itms.image} alt={`logo`} /> : null}
                                            <h1><ContentBreack content={itms.text} key={i} /></h1>
                                        </div>
                                    )
                                })
                            }

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
