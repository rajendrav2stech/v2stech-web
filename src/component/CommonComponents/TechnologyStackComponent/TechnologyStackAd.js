import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function TechnologyStackAd({ ad }) {
    return (
        <div className={ad.mobile}>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <Accordion preExpanded={['actActive']}>
                            {
                                ad.tab.tabss ? ad.tab.tabss.map((acd, b1) => {
                                    return (
                                        <AccordionItem uuid={acd.acdActive} key={b1}>
                                            {
                                                acd.title ? <AccordionItemHeading><AccordionItemButton>{acd.title}</AccordionItemButton> </AccordionItemHeading> : null
                                            }
                                            <AccordionItemPanel>
                                                <ul>
                                                    {
                                                        acd.ulList ? acd.ulList.map((ul, k4) => {
                                                            return (
                                                                <li key={k4}>
                                                                    {ul.list.image ? <img src={ul.list.image.url} alt={ul.list.image.title} /> : null}
                                                                    {ul.list.span ? <span>{ul.list.span.value}</span> : null}
                                                                </li>
                                                            )
                                                        }) : null
                                                    }
                                                </ul>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                }) : null
                            }
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TechnologyStackAd
