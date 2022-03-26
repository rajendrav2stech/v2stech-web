import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import useApi from '../hooks/useApi';
import { projectFeatureListApi } from './functions/projectFeatureListApi';
import { projectFeatureSliderApi } from './functions/projectFeatureSliderApi';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';

export default function ProjectDetailsFunctionalFeaturesMobile({ pageName }) {
    const [pfsformation] = useApi(projectFeatureSliderApi, pageName)
    const [pflformation] = useApi(projectFeatureListApi, pageName)
    const leftData = pflformation.length > 0 && pflformation.filter((items, i) => {
        return items.show_feature === 'L'
    })
    const rightData = pflformation.length > 0 && pflformation.filter((items, i) => {
        return items.show_feature === 'R'
    })
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className="details__functional__features">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <GlobalHeadingHardCoded strong={`Functional`} span={`Features`} />
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div className="content right">
                            {
                                leftData ? leftData.map((itmes, i) => {
                                    return (
                                        <div className="box_" key={i}>
                                            <div className="thumb_image">
                                                <img src={localDomain + itmes.image} alt={itmes.title} />
                                            </div>
                                            <h5>{itmes.title}</h5>
                                            <h6> {itmes.summary}</h6>
                                        </div>
                                    )
                                }) : null
                            }
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div className="features__slider">
                            {
                                pfsformation.length > 0 && pfsformation.map((slider, s) => {
                                    return (
                                        <Slider {...settings} key={s}>
                                            {
                                                slider.project_functional_features ? slider.project_functional_features.map((sl, slk) => {
                                                    return (
                                                        <div className="all_slider" key={sl}>
                                                            <img key={slk} src={localDomain + sl.image} alt={sl + sl.image_title} />
                                                        </div>
                                                    )
                                                }) : null
                                            }
                                        </Slider>
                                    )
                                })
                            }

                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div className="content left">
                            {
                                rightData ? rightData.map((itmess, ii) => {
                                    return (
                                        <div className="box_" key={ii}>
                                            <div className="thumb_image">
                                                <img src={localDomain + itmess.image} alt={itmess.title} />
                                            </div>
                                            <h5>{itmess.title}</h5>
                                            <h6> {itmess.summary}</h6>
                                        </div>
                                    )
                                }) : null
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
