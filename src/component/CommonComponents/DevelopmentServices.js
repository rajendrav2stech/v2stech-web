import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import DevelopmentCard from './DevelopmentCard'
import { devlopmentServicesApi } from './functions/devlopmentServicesApi';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';

export default function DevelopmentServices({ pageName }) {


    const [servicesInformation, DM_ServicesInformation] = useState([])

    useEffect(() => {
        let isActive = true;

        const setResponse = (res) => {
            if (isActive && res) {
                DM_ServicesInformation(res)
            }
        }

        devlopmentServicesApi({}, pageName, setResponse)

        return () => isActive = false;
    }, [pageName])


    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        adaptiveHeight: true,
    };
    return (
        <div className="development_Services desktop">
            <Container>
                <Row>
                    <Col lg={12}>
                        <GlobalHeadingHardCoded strong={`Development`} span={`services`} />
                    </Col>
                </Row>
                <div className="box_gride desktop row">
                    {
                        servicesInformation.length > 0 && servicesInformation.map((services, i) => {
                            return (
                                <Col md={4} key={i} >
                                    <div>
                                        <DevelopmentCard headingH4={services.title}  >
                                            <ul>
                                                {
                                                    services.technology_category.map((list, li) => {
                                                        return (
                                                            <li key={li}>{list.title}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </DevelopmentCard>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </div>
                <div className="box_gride mobile row">
                    <Col md={12} sm={12} lg={12}>
                        <Slider {...settings}>

                            {
                                servicesInformation.length > 0 && servicesInformation.map((servicess, ii) => {
                                    return (
                                        <div className="pad" key={ii}>
                                            <div className="content">
                                                <div>
                                                    <h4>{servicess.title}</h4>
                                                    <ul>
                                                        {
                                                            servicess.technology_category.map((lists, lii) => {
                                                                return (
                                                                    <li key={lii}>{lists.title}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </Slider>
                    </Col>
                </div>
            </Container>
        </div>
    )
}