import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded'
// import { TEAM1, TEAM2 } from '../../assets/images/Index'
import { lifeAtV2stechApi } from './functions/lifeAtV2stechApi'
import useApi from '../hooks/useApi'
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl'

export default function AboutLife() {
    const [lifeInfo] = useApi(lifeAtV2stechApi)
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className="about_life_v2stech">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <GlobalHeadingHardCoded strong={`Life at`} span={`V2STech`} />
                        <div className="about_life_v2stech_slider">
                            <Slider {...settings}>
                                {
                                    lifeInfo.length > 0 && lifeInfo.map((items, i) => {
                                        return (
                                            <div className="_slide" key={i}>
                                                <img src={localDomain + items.image} alt={`Team`} />
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
