import React, { useEffect, useState, Fragment } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import HeroSlidersContent from "./HeroSlidersContent";
import { sliderApi } from "./functions/sliderApi";
import { localDomain } from "../GlobalDefinations/GlobalConstants/GlobalUrl";
// import useApi from '../hooks/useApi'
import Loader from "./Loader";

export default function TechnologySlider({ pageName }) {
  const [loading, setLoading] = useState(true);
  // const [silderInformation] = useApi(sliderApi, pageName)
  const [silderInformation, SliderINfo] = useState([]);
  useEffect(() => {
    let isActive = true;
    const setResponse = (res) => {
      if (isActive && res) {
        setLoading(false);
        SliderINfo(res);
      }
    };
    sliderApi({}, pageName, setResponse);

    return () => (isActive = false);
  }, [pageName]);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <Fragment>
      <div className="technology__slider">
        <Slider {...settings}>
          {silderInformation.length > 0 &&
            silderInformation.map((info, i) => {
              return (
                <div className="all_slide" key={i}>
                  <Container>
                    <Row>
                      <HeroSlidersContent
                        title={info.title}
                        splitWordsCount={info.title_color_split_count}
                        summary={info.summary}
                        button_data={info.button_value_url}
                      />
                      {/* <HeroAnimationCard /> */}
                      <Col className="right" lg={5} md={5} sm={12} xs={12}>
                        {info.image ? (
                          <div className="design">
                            {/* <img src={localDomain + info.image} alt={info.title} className="w-100" /> */}
                            <picture>
                              <source
                                srcSet={localDomain + info.image}
                                type="image/png"
                                alt={info.title}
                              />
                              <img
                                src={localDomain + info.imageWebp}
                                type="webp"
                                alt={info.title}
                              />
                            </picture>
                          </div>
                        ) : null}
                        {info.video_url ? (
                          <iframe
                            title={info.title}
                            src={info.video_url}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : null}
                      </Col>
                    </Row>
                  </Container>
                </div>
              );
            })}
        </Slider>
      </div>
      {loading && <Loader />}
    </Fragment>
  );
}
