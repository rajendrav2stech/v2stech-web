import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useApi from '../hooks/useApi'
import ContentBreack from './ContentBreack'
import { aboutTimelineApi } from './functions/aboutTimelineApi'
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded'
// import NewLineText from './NewLineText'

export default function AboutTimeLine() {
    const [timelineInfo] = useApi(aboutTimelineApi)


    return (
        <div className="about_time_line">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <GlobalHeadingHardCoded strong={`Timeline`} span={``} />
                        <div className="timeline">
                            <div classNameName="container">
                                <div className="row">
                                    <div className="col-lg-12">

                                        {
                                            timelineInfo.length > 0 && timelineInfo.map((item, i) => {
                                                return (
                                                    <div className="timeline-continue" key={i}>
                                                        <div className="timeline-end">
                                                            <p>{item.title}</p>
                                                        </div>
                                                        {
                                                            item.about_us ? item.about_us.map((timeline, tl) => {
                                                                return (
                                                                    <div className={Math.abs(tl % 2) == 1 ? "row timeline-left" : "row timeline-right"} key={tl}>
                                                                        <div className={Math.abs(tl % 2) == 1 ? "col-md-6 d-md-none d-block" : "col-md-6"}>
                                                                            <p className="timeline-date">{timeline.date}</p>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="timeline-box">
                                                                                <div className="timeline-text">
                                                                                    <h3>{timeline.title}</h3>
                                                                                    <ContentBreack content={timeline.summary} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className={Math.abs(tl % 2) == 1 ? "col-md-6 d-md-block d-none" : 'd-none'}>
                                                                            <p className="timeline-date">
                                                                                {timeline.date}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }) : null
                                                        }
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
