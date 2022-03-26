import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HEADER_EMAIL, HEADER_LAYER, USA_FLAG, WHATSAPP } from '../../assets/images/Index'
import LeftTopHeaderList from './LeftTopHeaderList'

function ContactUsHeader() {
    return (
        <div className="top__header">
            <Container>
                <Row>
                    <Col className="top_head d-flex align-items-center justify-content-between">
                        <div className="left_top_head">
                            <ul className="d-flex align-items-center">
                                <LeftTopHeaderList href={'tel:0018622481260'} imgSrc={USA_FLAG} content={"Sales - 001 (862) 248 1260"} />
                                <LeftTopHeaderList href={'tel:0018622481260'} imgSrc={HEADER_EMAIL} content={"sales@v2stech.com"} />
                                <LeftTopHeaderList href={'tel:0018622481260'} imgSrc={WHATSAPP} content={"001 (862) 248 1260"} />
                            </ul>
                        </div>
                        <div className="right_top_head">
                            <ul className="d-flex align-items-center">
                                <li>
                                    <a href='contact-us' className="btn btn--secondary">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUsHeader
