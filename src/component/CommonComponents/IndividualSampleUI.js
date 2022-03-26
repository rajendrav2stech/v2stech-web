import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl'
import useApi from '../hooks/useApi'
import ContentBreack from './ContentBreack'
import { individualUiSampleApi } from './functions/individualUiSampleApi'

export default function IndividualSampleUI({ pageName }) {
    const [sampleUIData] = useApi(individualUiSampleApi, pageName)
    return (
        <div className="Indidual_samplepage">
            {
                sampleUIData.length > 0 && sampleUIData.map((items, i) => {
                    return (
                        <Container key={i}>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <h3>{items.title}</h3>
                                    <img src={localDomain + items.image} alt={items.title} className="thumbnill" />
                                    <div className="text-center btn-default">
                                        {items.button_title ? <a target="_blank" href={items.button_url}>{items.button_title}</a> : null}
                                    </div>
                                    <ContentBreack content={items.text} />
                                </Col>
                            </Row>
                        </Container>
                    )
                })
            }
        </div>
    )
}
