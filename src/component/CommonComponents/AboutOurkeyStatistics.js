import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { KEY_STATIC } from '../../assets/images/Index'
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl'
import useApi from '../hooks/useApi'
import { aboutUsKeyStasticApi } from './functions/aboutUsKeyStasticApi'
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded'
import KeyStastic from './KeyStastic';

export default function AboutOurkeyStatistics() {
    const [aboutKeyIformation] = useApi(aboutUsKeyStasticApi)
    return (
        <div className="about_ourkey_statistics">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} className="text-center">
                        <GlobalHeadingHardCoded strong={`Our`} span={`Key Statistics`} />
                    </Col>
                </Row>
                <Row className="rev_mob">

                    {
                        aboutKeyIformation.length > 0 && aboutKeyIformation.map((items, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="content_">

                                            <ul className="blobal_bullet">
                                                {
                                                    items.key_statistics ? items.key_statistics.map((list, l) => {
                                                        return (
                                                            <li key={l}>
                                                                <KeyStastic content={list.point} key={i} />
                                                            </li>
                                                        )
                                                    }) : null
                                                }
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="thumnill_imahe">
                                            <img src={localDomain + items.image} alt={items.title} />
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
