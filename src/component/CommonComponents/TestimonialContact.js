// import item from 'isotope-layout/js/item';
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import { CONTACT_FORM } from '../../actions/types';
// import { KARRILEE } from '../../assets/images/Index';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import ContactForm from './Forms/ContactForm';
import { customerTestimonialApi } from './functions/customerTestimonialApi';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';

function TestimonialContact({ pageName }) {
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    adaptiveHeight: true,
                }
            },
        ]
    };

    const [customerTestimonialInformation, customerTestimonialInfo] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                customerTestimonialInfo(res)
            }
        }
        customerTestimonialApi({}, pageName, setResponse)

        return () => isActive = false;

    }, [pageName])
    return (
        <div className="testimonial___Contact">
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <GlobalHeadingHardCoded strong={`Customer Testimonials`} />
                        <div className="contact__slider text-left">
                            <Slider {...settings}>
                                {
                                    customerTestimonialInformation.length > 0 && customerTestimonialInformation.map((item, i) => {
                                        return (
                                            <div className={item.video_url ? 'client only_video' : 'client only_content'} key={i}>
                                                <p className="summary">{item.summary}</p>
                                                <iframe title={item.title} width="100%" height="260" src={item.video_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                <div className="user">
                                                    <img src={localDomain + item.user_profile_photo} alt={item.username} />
                                                    <strong>{item.username}</strong>
                                                    <span>{item.user_designation}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                            <div className="btn-default"><a href="/clients" target="_blank">View all clients</a></div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="contact__form">
                            <ContactForm formType={CONTACT_FORM} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TestimonialContact