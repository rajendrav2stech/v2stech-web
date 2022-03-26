import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import useApi from '../hooks/useApi';
import { projectServicesApi } from './functions/projectServicesApi';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';
import ProjectDetailsBuildPerfomance from '../CommonComponents/ProjectDetailsBuildPerfomance'

export default function ProjectDetailsServicesOffer({ pageName }) {
    const [servicesformation] = useApi(projectServicesApi, pageName)
    return (
        <div className="project_details_services_offer">
            <Container>
                <Row>
                    <Col>
                        <div className="content">
                            <GlobalHeadingHardCoded strong={`Services`} span={`Offered`} />
                            <ul>
                                {
                                    servicesformation.length > 0 && servicesformation.map((items, i) => {
                                        return (
                                            <li key={i}>
                                                <img src={localDomain + items.image} alt={items.title} />
                                                <div>
                                                    <strong>{items.title}</strong>
                                                    <span>{items.summary}</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ProjectDetailsBuildPerfomance pageName={pageName} />
        </div>
    )
}
