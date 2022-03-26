import React, { Fragment } from "react";
import { Col, Container, Row, Tabs, Tab, Accordion, Card, Button, Spinner } from 'react-bootstrap'
import { localDomain } from '../../GlobalDefinations/GlobalConstants/GlobalUrl'
// import { Accordion, AccordionItem } from 'react-light-accordion';
// import { } from 'react-bootstrap'

import StackImage from '../StackImage'

function TechnologyStackTab({ technologyStackCategoryInformation, technologyStackSubCategoryInformation, getSubCategoryInfo, loading, setLoading }) {
    const defaultActiveKey = '0';

    return (
        <Fragment>
            <div className="desktop_stack">
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div>
                                <Tabs>
                                    {technologyStackCategoryInformation.length > 0 && technologyStackCategoryInformation.map((el, i) => {
                                        return (
                                            <Tab eventKey={el.id} key={i} title={el.category} onEnter={() => { setLoading(true); getSubCategoryInfo(el.id) }}>
                                                <Col className="p-0 d-flex justify-content-around text-center">
                                                    {
                                                        loading
                                                            ? <Spinner animation="border" variant="primary" />
                                                            :
                                                            technologyStackSubCategoryInformation.length > 0 && technologyStackSubCategoryInformation.map((item, j) => {
                                                                return (
                                                                    <StackImage key={"ul" + j} className={`stack`} imgUrl={localDomain + item.image_icon} imgTitle={item.title} webpimage={localDomain + item.image_icon_webp}>
                                                                        {item.title}
                                                                    </StackImage>
                                                                )
                                                            })}
                                                </Col>
                                            </Tab>
                                        )
                                    })
                                    }

                                </Tabs>
                            </div>
                        </Col>
                    </Row >
                </Container >
            </div >
            <div className="mobile_stack">
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <Accordion defaultActiveKey='0'>
                                {
                                    technologyStackCategoryInformation.length > 0 && technologyStackCategoryInformation.map((elm, im) => {
                                        return (
                                            <Card key={im}>
                                                <Card.Header>
                                                    <h4>{elm.category}
                                                        <Accordion.Toggle
                                                            as={Button}
                                                            variant="link"
                                                            eventKey={im === 0 ? defaultActiveKey : elm.id}
                                                            onClick={() => { setLoading(true); getSubCategoryInfo(elm.id) }}
                                                        // 
                                                        >
                                                        </Accordion.Toggle></h4>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey={im === 0 ? defaultActiveKey : elm.id}>
                                                    <Card.Body>
                                                        {
                                                            loading
                                                                ? <Spinner animation="border" variant="primary" />
                                                                :
                                                                technologyStackSubCategoryInformation.length > 0 && technologyStackSubCategoryInformation.map((item, j) => {
                                                                    return (
                                                                        <StackImage key={"ul" + j} className={`stack`} imgUrl={localDomain + item.image_icon} imgTitle={item.title}>
                                                                            {item.title}
                                                                        </StackImage>
                                                                    )
                                                                })}
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        )
                                    })
                                }
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

export default TechnologyStackTab
