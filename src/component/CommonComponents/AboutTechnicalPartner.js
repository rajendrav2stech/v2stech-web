import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useApi from '../hooks/useApi'
import { aboutUsResonApi } from './functions/aboutUsResonApi'
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded'

export default function AboutTechnicalPartner() {
    const [aboutUsResonformation] = useApi(aboutUsResonApi)
    return (
        <div className="about_technical_partner">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <GlobalHeadingHardCoded strong={`Top Reasons To Make`} span={`V2stech Your Technical Partner`} />
                        <div className="about_technical_list">
                            {
                                aboutUsResonformation.length > 0 && aboutUsResonformation.map((items, i) => {
                                    return (
                                        <div className="content" key={i}>
                                            <h4>{items.category}</h4>
                                            <p>{items.sub_category}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
