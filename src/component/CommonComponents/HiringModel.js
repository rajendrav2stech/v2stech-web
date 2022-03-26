import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import HiringModalCard from './HiringModalCard';
import { hiringModalApi } from './functions/hiringModalApi';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';


export default function HiringModel({ pageName }) {
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '120px',
        swipeToSlide: true,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    arrows: false,
                    infinite: true,
                    speed: 500,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 439,
                settings: {
                    dots: true,
                    arrows: false,
                    infinite: true,
                    speed: 500,
                    centerPadding: '0px',
                }
            }
        ]
    };
    const [hiringModalInfo, hiringInfo] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                hiringInfo(res)
            }
        }
        hiringModalApi({}, pageName, setResponse)
        return () => isActive = false;
    }, [pageName])
    return (
        <div className="hiring___model">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} >
                        <GlobalHeadingHardCoded strong={`Hiring`} span={`model`} />
                    </Col>
                </Row>
                <div className="desktop__hireing__model">
                    <Row>
                        {
                            hiringModalInfo.length > 0 && hiringModalInfo.map((hireModalContent, i) => {
                                return (
                                    <Col lg={4} md={4} sm={12} key={i}>
                                        <HiringModalCard
                                            Icon={localDomain + hireModalContent.image}
                                            IconName={hireModalContent.title}
                                            headingh4={hireModalContent.title}
                                            pagragraph={hireModalContent.summary}
                                            button={`Get Quote`}>
                                            <ul>
                                                {
                                                    hireModalContent.hiring_model.map((list, l) => {
                                                        return (
                                                            <li key={l}>{list.point}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </HiringModalCard>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
                <div className="mobile__hireing__model">
                    <Row>
                        <Col>
                            <Slider {...settings}>
                                {
                                    hiringModalInfo.length > 0 && hiringModalInfo.map((hireModalContents, ii) => {
                                        return (
                                            <div key={ii}>
                                                <HiringModalCard
                                                    Icon={localDomain + hireModalContents.image}
                                                    IconName={hireModalContents.title}
                                                    headingh4={hireModalContents.title}
                                                    pagragraph={hireModalContents.summary}
                                                    button={`Get Quote`}
                                                >
                                                    <ul>
                                                        {
                                                            hireModalContents.hiring_model.map((lists, ll) => {
                                                                return (
                                                                    <li key={ll}>{lists.point}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </HiringModalCard>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}