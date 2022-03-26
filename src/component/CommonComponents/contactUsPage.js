import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CONTACT_FORM } from '../../actions/types'
import ContactForm from './Forms/ContactForm'
import { contactUsInformationData } from '../../tempdata/HardCodedData/contactUsInformationData'
import NewLineText from './NewLineText'

function contactUsPage() {
    const data = contactUsInformationData
    return (
        <div className="contact_us_page">
            <Container>
                <Row className="section_1">
                    <Col md={8}>
                        <ContactForm formType={CONTACT_FORM} />
                    </Col>
                    <Col md={4}>
                        <div className="business_query">
                            <h4>{data.sales.title}</h4>
                            <ul>
                                <li><img src={data.sales.phoneNumbers.image} alt={`Phone Number`} /> <span>{data.sales.phoneNumbers.numbers[0]}</span></li>
                                <li><img src={data.sales.whatsApp.image} alt={`Phone Number`} /> <span>{data.sales.whatsApp.numbers[0]}</span></li>
                                <li><img src={data.sales.email.image} alt={`Phone Number`} /> <span>{data.sales.email.emailId}</span></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="section_2">
                    <Col md={4}>
                        <div className="address">
                            <h4>{data.address.title}</h4>
                            <NewLineText text={data.address.secondary} />
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="location_map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15072.595221379346!2d72.9734367!3d19.1887019!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x13f3788d4a27fef9!2sV2STech%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1615025997112!5m2!1sen!2sin" width="100%" height="350" allowFullScreen loading="lazy"></iframe>
                        </div>
                    </Col>
                </Row>
                <Row className="section_3">

                    <Col md={6}>
                        <p>
                            <h4>{data.careers.title}</h4>
                            <p>{data.careers.text}</p>
                            <a href="/career" target="_blank"><button className="btn btn-primary view_opening">View Opening</button></a>
                        </p>
                    </Col>
                    <Col md={6}>
                        <div className="address">
                            <h4>{data.hrDepartment.title}</h4>
                            <ul>
                                <li><img src={data.hrDepartment.phoneNumbers.image} alt={`Phone Number`} /> <span>{data.hrDepartment.phoneNumbers.numbers[0]}</span></li>
                                <li><img src={data.hrDepartment.phoneNumbers.image} alt={`Phone Number`} /> <span>{data.hrDepartment.phoneNumbers.numbers[1]}</span></li>
                                <li><img src={data.hrDepartment.email.image} alt={`Phone Number`} /> <span>{data.hrDepartment.email.emailId}</span></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default contactUsPage