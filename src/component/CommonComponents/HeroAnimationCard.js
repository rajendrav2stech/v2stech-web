import React from 'react'
import { Col } from 'react-bootstrap'
import Slider from "react-slick";
import {
    PYTHONSVG1, PYTHONSVG2, PYTHONSVG3, PYTHONSVG4, PYTHONSVG5,
    PYTHONSVG6, PYTHONSVG7, PYTHONSVG8, PYTHONSVG9, PYTHON, DJANGO, TENSORFLOW, FLASK,
} from '../../assets/images/Index'
import HeroAnimationCardImage from './HeroAnimationCardImage';

const HeroAnimationCard = () => {
    const svgSetting = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        verticalSwiping: true,
        vertical: true,
        fade: true,
        cssEase: 'linear'
    }
    return (
        <Col className="right" lg={5} md={5} sm={12} xs={12}>
            <div className="design">
                <div className="svg_container python">
                    <HeroAnimationCardImage url={PYTHONSVG1} imgTitle={`Python`} className={`innerBox_1`} />
                    <HeroAnimationCardImage url={PYTHONSVG2} imgTitle={`Python`} className={`innerBox_2 center_`} />
                    <HeroAnimationCardImage url={PYTHONSVG3} imgTitle={`Python`} className={`innerBox_3 center_`} />
                    <HeroAnimationCardImage url={PYTHONSVG4} imgTitle={`Python`} className={`innerBox_4 center_`} />
                    <HeroAnimationCardImage url={PYTHONSVG5} imgTitle={`Python`} className={`innerBox_5 center_`} />
                    <HeroAnimationCardImage url={PYTHONSVG6} imgTitle={`Python`} className={`innerBox_6 center_`} />
                    <HeroAnimationCardImage url={PYTHONSVG7} imgTitle={`Python`} className={`innerBox_7 center_`} />
                    <HeroAnimationCardImage url={PYTHONSVG8} imgTitle={`Python`} className={`innerBox_8 center_`} />
                    <HeroAnimationCardImage url={PYTHONSVG9} imgTitle={`Python`} className={`innerBox_9 center_`} />
                    <div className="svg_slider python">
                        <div className="shadow_">
                            <Slider {...svgSetting}>
                                <div className="icon_"> 
                                    <HeroAnimationCardImage url={PYTHON} imgTitle={`Python`} />
                                </div>
                                <div className="icon_">
                                    <HeroAnimationCardImage url={DJANGO} imgTitle={`Python`} />
                                </div>
                                <div className="icon_">
                                    <HeroAnimationCardImage url={TENSORFLOW} imgTitle={`Python`} />
                                </div>
                                <div className="icon_">
                                    <HeroAnimationCardImage url={FLASK} imgTitle={`Python`} />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}
export default HeroAnimationCard