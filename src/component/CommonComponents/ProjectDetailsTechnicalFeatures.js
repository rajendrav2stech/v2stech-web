import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl'
import useApi from '../hooks/useApi'
import { projectTechFeatureApi } from './functions/projectTechFeatureApi'
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded'

export default function ProjectDetailsTechnicalFeatures({ pageName }) {
    const [ptfformation] = useApi(projectTechFeatureApi, pageName)
    return (
        <div className="details__technica_features">
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="content">
                            <GlobalHeadingHardCoded strong={`Technical`} span={`Features`} />
                            <ul className="blobal_bullet">
                                {
                                    ptfformation.length > 0 && ptfformation.map((items, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                {
                                                    items.project_technical ? items.project_technical.map((itm, list) => {
                                                        return (
                                                            <li key={list}>{itm.point}</li>
                                                        )
                                                    }) : null
                                                }
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="gride_features">
                            {
                                ptfformation.length > 0 && ptfformation.map((itemss, img) => {
                                    return (
                                        <img key={img} src={localDomain + itemss.image} alt={itemss.title} />
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
