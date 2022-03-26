import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import HiringModalCard from './HiringModalCard';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';
import { aboutMisionVisionApi } from './functions/aboutMisionVisionApi';
import useApi from '../hooks/useApi';
// import { EqualHeight, EqualHeightElement } from 'react-equal-height';


export default function AboutMissionVission() {
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
        adaptiveHeight: true,
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
    const [missionVisionInfo] = useApi(aboutMisionVisionApi)
    return (
        <>
            <>
                <div className="hiring___model mission_vission">
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12} >
                                <GlobalHeadingHardCoded strong={`Mission Vision &`} span={`Values`} />
                            </Col>
                        </Row>
                        <div className="desktop__hireing__model">
                            <Row>
                                {
                                    missionVisionInfo.length > 0 && missionVisionInfo.map((hireModalContent, i) => {
                                        return (
                                            <Col lg={4} md={4} sm={12} key={i}>
                                                <HiringModalCard
                                                    Icon={localDomain + hireModalContent.image}
                                                    IconName={hireModalContent.title}
                                                    headingh4={hireModalContent.title}
                                                    pagragraph={hireModalContent.summary}
                                                    button={`Get Quote`}
                                                >
                                                    <ul>
                                                        {
                                                            hireModalContent.points ? hireModalContent.points.map((list, l) => {
                                                                return (
                                                                    <li key={l}>{list.point}</li>
                                                                )
                                                            }) : null
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
                                            missionVisionInfo.length > 0 && missionVisionInfo.map((hireModalContents, ii) => {
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
                                                                    hireModalContents.points ? hireModalContents.points.map((lists, ll) => {
                                                                        return (
                                                                            <li key={ll}>{lists.point}</li>
                                                                        )
                                                                    }) : null
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
            </>
        </>
    )
}