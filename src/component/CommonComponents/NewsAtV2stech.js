import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import { newsOrderApi } from './functions/newsOrderApi';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';

function NewsAtV2stech({ pageName }) {
    const [newData, setNewData] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                setNewData(res)
            }
        }
        newsOrderApi({}, pageName, setResponse)

        return () => isActive = false;

    }, [pageName])


    return (
        <div className="project__blog_home">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} className="text-center">
                        <GlobalHeadingHardCoded strong={`What's New At`} span={`V2STech`} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} className="text-center">
                        <div className="blog__slider">
                            <div className="d-flex clearfix">
                                <div className="right">
                                    {
                                        newData.length > 0 && newData.map((bloghome, i) => {
                                            let date = new Date(bloghome.date);
                                            let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
                                            return (

                                                <div className="second_bolg clearfix" key={i}>
                                                    <div className="ls">
                                                        {/* <img src={localDomain + bloghome.image} alt={bloghome.title} /> */}
                                                        <picture>
                                                            <source srcSet={localDomain + bloghome.image} type="image/png" alt={bloghome.title} />
                                                            <img src={localDomain + bloghome.imageWebp_news} type="webp" alt={bloghome.title} />
                                                        </picture>
                                                    </div>
                                                    <div className="rs">
                                                        <span style={{ fontWeight: 600, fontSize: 14 }}>{dateMDY}</span>
                                                        <h5>{bloghome.title}</h5>
                                                        <div className="summary_">
                                                            <p>{bloghome.summary}</p>
                                                        </div>
                                                        <a href={bloghome.read_more_url} target="_blank"><span>Read More</span></a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default NewsAtV2stech