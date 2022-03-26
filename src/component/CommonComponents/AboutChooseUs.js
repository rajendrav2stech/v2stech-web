import React, { useContext, useState } from 'react'
import { WHYCHOOSE } from '../../assets/images/Index'
import { Accordion, AccordionContext, Card, Col, Container, Row, useAccordionToggle } from 'react-bootstrap'
import useApi from '../hooks/useApi'
import { aboutUsResonApi } from './functions/aboutUsResonApi'
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded'

export default function AboutChooseUs() {
    const [aboutUsResonformation] = useApi(aboutUsResonApi)

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
        <div className="about_choose_us" >
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}><GlobalHeadingHardCoded strong={`Why`} span={`Choose Us`} /></Col>
                    <Col lg={5} md={5} sm={12}>
                        <div className="about_choose_us_image">
                            <img className="w-100" src={WHYCHOOSE} alt={WHYCHOOSE} />
                        </div>
                    </Col>
                    <Col lg={7} md={7} sm={12} className="choose_us_accordion">
                        {/* <Accordion defaultActiveKey="0">
                            {
                                aboutUsResonformation ? aboutUsResonformation.map((items, i) => {
                                    console.log("items" + i)
                                    return (
                                        <Card key={i}>
                                            <Card.Header>
                                                <div className="content_box">
                                                    <ContentActive eventKey={i} className="">{items.category}</ContentActive>
                                                    
                                                    <ContextAwareToggle></ContextAwareToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey={i}>
                                                <Card.Body>
                                                    <p>{items.sub_category}</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    )
                                }) : null
                            }
                        </Accordion> */}
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <div className="content_box">
                                        <ContentActive eventKey="0" className="">Spectrum of customised solutions</ContentActive>
                                        <ContextAwareToggle></ContextAwareToggle>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <p>Technical expertise is what truly drives V2STech forward. Our team offers a suite of solutions from user experience design, application development, application enhancement and support. Our services are customised for your business.</p></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <div className="content_box">
                                        <ContentActive eventKey="1">Extensive integration technology experience</ContentActive>
                                        <ContextAwareToggle ></ContextAwareToggle>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <p>We specialize in integration solution services using middleware products, Event driven and micro services based architecture.</p></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <div className="content_box">
                                        <ContentActive eventKey="2">Latest technical advancements</ContentActive>
                                        <ContextAwareToggle ></ContextAwareToggle>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <p>V2STech embraces innovation and encourages its team to look beyond the obvious. Thus, it explores newer horizons to offer updated solutions befitting unique requirements of your business.</p></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <div className="content_box">
                                        <ContentActive eventKey="4">Cost-efficient alternatives</ContentActive>
                                        <ContextAwareToggle ></ContextAwareToggle>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                        <p>The team is empowered to identify and implement solutions based on updated open source tools and frameworks. It leads to cutting costs on software license investments.</p></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <div className="content_box">
                                        <ContentActive eventKey="5">Customer centric solutions</ContentActive>
                                        <ContextAwareToggle ></ContextAwareToggle>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>
                                        <p>V2STech has relentless focus on clients business vision. It simplifies processes, minimizes user learning curve and adapts user-centric designs to achieve higher engagement.</p></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
