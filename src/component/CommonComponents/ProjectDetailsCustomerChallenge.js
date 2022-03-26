import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import useApi from '../hooks/useApi';
import { projectSCustomerChallangeApi } from './functions/projectSCustomerChallangeApi';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';

export default function ProjectDetailsCustomerChallenge({ pageName }) {
    const [pccformation] = useApi(projectSCustomerChallangeApi, pageName)
    return (
        <div className="details__customer__challenge">
            <Container>
                <Row>
                    {
                        pccformation.length > 0 && pccformation.map((itmes, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="thumbnail">
                                            <img src={localDomain + itmes.image} alt="Dashboard" />
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="content">
                                            <GlobalHeadingHardCoded strong={`Customer`} span={`Challenges`} />
                                            <ul className="blobal_bullet">
                                                {
                                                    itmes.customer_challanges_title ? itmes.customer_challanges_title.map((itm, ii) => {
                                                        return (
                                                            <li key={ii}>{itm.point}</li>
                                                        )
                                                    }) : null
                                                }
                                            </ul>
                                        </div>
                                    </Col>
                                </React.Fragment>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
