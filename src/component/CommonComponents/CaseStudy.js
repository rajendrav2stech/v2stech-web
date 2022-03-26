import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import useApi from '../hooks/useApi';
import { caseStudyApi } from './functions/caseStudyApi';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';

export default function CaseStudy({ pageName }) {
    const [caseStudyiformation] = useApi(caseStudyApi, pageName)
    const settings = {
        dots: false,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: false,
        autoplaySpeed: 3000,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    adaptiveHeight: true,
                }
            },
        ]
    }
    return (
        <div className="case_study">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <GlobalHeadingHardCoded strong={`More`} span={`Case Study`} />
                        <div className="case_study_slider">
                            <Slider {...settings} >
                                {
                                    caseStudyiformation.length > 0 && caseStudyiformation.map((items, i) => {
                                        return (
                                            <div key={i}>
                                                <a href={items.project_url} target="_blank">
                                                    <div className="all_slide">
                                                        <div className="pad">
                                                            <img src={localDomain + items.image} alt={items.title} />
                                                            <h6>{items.title}</h6>
                                                            <h5>{items.sub_title}</h5>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    })
                                }

                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
