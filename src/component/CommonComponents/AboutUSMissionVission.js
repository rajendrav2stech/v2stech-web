import React, { useContext } from 'react'
import { MVV } from '../../assets/images/Index'
import { Accordion, AccordionContext, Card, Col, Container, Row, useAccordionToggle } from 'react-bootstrap'
// import useApi from '../hooks/useApi'
// import { aboutUsResonApi } from './functions/aboutUsResonApi'
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded'

export default function AboutUSMissionVission() {
    // const [aboutUsResonformation] = useApi(aboutUsResonApi)
    function ContextAwareToggle({ children, eventKey, callback }) {
        const currentEventKey = useContext(AccordionContext);
        const decoratedOnClick = useAccordionToggle(
            eventKey,
            () => callback && callback(eventKey),
        );
        const isCurrentEventKey = currentEventKey === eventKey;
        return (
            <div
                // type="button"
                style={{ backgroundColor: isCurrentEventKey ? '#294dff' : '#25305e' }}
                className={isCurrentEventKey ? 'icon-plus blue w25 ms' : 'icon-plus blue w25'}
                onClick={decoratedOnClick}
            >
                {children}
            </div>
        );
    }
    function ContentActive({ children, eventKey, callback }) {
        const currentEventKey = useContext(AccordionContext);
        const decoratedOnClick = useAccordionToggle(
            eventKey,
            () => callback && callback(eventKey),
        );
        const isCurrentEventKey = currentEventKey === eventKey;
        return (
            <h3
                // type="button"
                style={{ color: isCurrentEventKey ? '#294DFF' : '#173069' }}
                className={isCurrentEventKey ? 'active' : 'non_active'}
                onClick={decoratedOnClick}
            >
                {children}
            </h3>
        );
    }




    return (

        <div className="about_choose_us m-0">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}><GlobalHeadingHardCoded strong={`Mission`} span={`Vision & Values`} /></Col>
                    <Col lg={5} md={5} sm={12}>
                        <div className="about_choose_us_image">
                            <img className="w-100" src={MVV} alt={MVV} />
                        </div>
                    </Col>
                    <Col lg={7} md={7} sm={12} className="choose_us_accordion">
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <div className="content_box">
                                        <ContentActive eventKey="0">Our mission</ContentActive>
                                        <ContextAwareToggle ></ContextAwareToggle>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div className="list_item">
                                            <ul className="blobal_bullet">
                                                <li>We look forward to working hand-in-hand with our esteemed clientele to digitize business process and achieve high ROI with our integration solutions.</li>
                                                <li>We aspire to become a globally recognized company in the area of integration by 2023.</li>
                                                <li>We believe that to be a trusted brand innovating and simplifying IT processes to bring transparency and accountability at all levels is vital.</li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <div className="content_box">
                                        <ContentActive eventKey="1">Our vision</ContentActive>
                                        <ContextAwareToggle ></ContextAwareToggle>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <ul className="blobal_bullet">
                                            <li>We aspire to be a global Integration Solution Speicalist born out of a passion to innovate and transform the way business function.</li>
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <div className="content_box">
                                        <ContentActive eventKey="2">Our values</ContentActive>
                                        <ContextAwareToggle ></ContextAwareToggle>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <ul className="blobal_bullet">
                                            <li>Customer-oriented</li>
                                            <li>Value-centricity</li>
                                            <li>Innovation</li>
                                            <li>Impact</li>
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
