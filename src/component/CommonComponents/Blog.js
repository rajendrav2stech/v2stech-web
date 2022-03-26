import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import { blogApi } from './functions/blogApi';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';

function Blog({ pageName }) {
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    const [blogInformation, blogInfo] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                blogInfo(res)
            }
        }
        blogApi({}, pageName, setResponse)

        return () => isActive = false;

    }, [pageName])

    const dataBIG = blogInformation.length > 0 && blogInformation.filter((items, i) => {
        return items.show_card === 'B'
    })
    const dataSmall = blogInformation.length > 0 && blogInformation.filter((items, i) => {
        return items.show_card === 'S'
    })
    return (
        <div className="project__blog">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} className="text-center">
                        <GlobalHeadingHardCoded strong={`Our`} span={`blogs`} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={7} md={7} sm={12} className="text-center">
                        <div className="blog__slider">
                            <Slider {...settings}>
                                {
                                    dataBIG ? dataBIG.map((blogBigData, i) => {
                                        return (
                                            <div key={i}>
                                                <div className="all">
                                                    <img src={blogBigData.blog_image_url}
                                                        alt={blogBigData.title} />
                                                    <div className="content text-left">
                                                        <h4>{blogBigData.title}</h4>
                                                        <p>{blogBigData.summary}</p>
                                                        <div className="btn-default icon-right">
                                                            <a href={blogBigData.redirect_url} target="_blank"><span>Read More</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }) : null
                                }
                            </Slider>
                        </div>
                    </Col>
                    <Col lg={5} md={5} sm={12} className="text-center">
                        <div className="all_blog">
                            {
                                dataSmall ? dataSmall.map((smallData, ii) => {
                                    return (
                                        <div className="re_blog" key={ii}>
                                            <img src={smallData.blog_image_url}
                                                alt="product-chatbot" />
                                            <div className="content">
                                                <a href={smallData.redirect_url}
                                                    target="_blank">{smallData.title}</a></div>
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
export default Blog