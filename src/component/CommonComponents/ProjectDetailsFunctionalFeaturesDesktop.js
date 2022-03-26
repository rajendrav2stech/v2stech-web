// import item from 'isotope-layout/js/item';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import { IMACBOOK } from '../../assets/images/Index';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import useApi from '../hooks/useApi';
import { projectFeatureListApi } from './functions/projectFeatureListApi';
import { projectFeatureSliderApi } from './functions/projectFeatureSliderApi';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';

export default function ProjectDetailsFunctionalFeaturesDesktop({ pageName }) {
    const [pfsformation] = useApi(projectFeatureSliderApi, pageName)
    const [pflformation] = useApi(projectFeatureListApi, pageName)
    const desktopData = pflformation.length > 0 && pflformation.filter((items, i) => {
        return items.show_feature === 'D'
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
        <div className="details__functional__features_desktop">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <GlobalHeadingHardCoded strong={`Functional`} span={`Features`} />
                        <div className="functional__features_desktop_slider">
                            <div className="macbook_mookup">
                                <img src={IMACBOOK} alt="macBook" />
                            </div>
                            {
                                pfsformation.length > 0 && pfsformation.map((slider, s) => {
                                    return (
                                        <div className="details__functional__features_desktop_slider" key={s}>
                                            <Slider {...settings} >
                                                {
                                                    slider.project_functional_features ? slider.project_functional_features.map((sl, slk) => {
                                                        return (
                                                            <div className="slide" key={sl}>
                                                                <img key={slk} src={localDomain + sl.image} alt={sl + sl.image_title} />
                                                            </div>
                                                        )
                                                    }) : null
                                                }
                                            </Slider>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="functional__features_desktop_description">
                            {
                                desktopData ? desktopData.map((items, i) => {
                                    return (
                                        <div className="conternt" key={i}>
                                            <div className="pad">
                                                <h5>{items.title}</h5>
                                                <p>{items.summary}</p>
                                            </div>
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
