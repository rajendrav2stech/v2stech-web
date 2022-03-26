// import { string } from 'prop-types';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Tab, Tabs, Spinner } from 'react-bootstrap';
import { PRODUCT_DEV_WEBP } from '../../assets/images/Index';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import useApi from '../hooks/useApi';
import { whatWeOfferApi } from './functions/whatWeOfferApi';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';
import Loading3Dots from './Loading3Dots';

function ServicesTab({ pageName }) {
    const [whatWeOfferCategoryData, whatWeOfferSubCategoryData, getSubCategoryInfo, loading, setLoading] = useApi(whatWeOfferApi, pageName, true, true)
    const [loadings, setLoadings] = useState(true)


    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoadings(false);
    //     }, 1000);
    // }, [whatWeOfferSubCategoryData]);
    const ImgWithFallback = ({
        src,
        fallback,
        type = 'image/webp',
        ...delegated
    }) => {
        return (
            <picture>
                <source srcSet={src} type={type} />
                <img src={fallback} {...delegated} />
            </picture>
        );
    };
    return (
        <div className="services_new_tab">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} className="text-center">
                        <GlobalHeadingHardCoded strong={`What We`} span={`Offer`} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} className="text-center">
                        {whatWeOfferCategoryData &&
                            <Row>

                                <Col md={12}>
                                    <Tabs className='tab_view'>
                                        {
                                            whatWeOfferCategoryData.length > 0 && whatWeOfferCategoryData.map((item, i) => {
                                                return (
                                                    <Tab eventKey={`${item.id}`} title={item.title} onEnter={() => { setLoading(true); getSubCategoryInfo(item.id) }} key={i}>
                                                        { loading ? <Spinner animation="border" variant="primary" /> :
                                                            whatWeOfferSubCategoryData && whatWeOfferSubCategoryData.length > 0 && whatWeOfferSubCategoryData.map((items, ii) => {
                                                                return (
                                                                    <Row id="left-tabs-example" key={ii}>
                                                                        <Col lg={5} md={5} sm={12}>
                                                                            <div className="tab_image">
                                                                                {/* <img src={localDomain + items.image} alt={items.title} /> */}
                                                                                {/* <ImgWithFallback
                                                                                        src={localDomain + items.image}
                                                                                        fallback={PRODUCT_DEV_WEBP}
                                                                                        alt={items.title}
                                                                                    /> */}
                                                                                {/* <picture>
                                                                                        <source srcSet={localDomain + items.image} type="image/png" />
                                                                                        <img src={PRODUCT_DEV_WEBP} alt={items.title} />
                                                                                    </picture> */}
                                                                                <picture>
                                                                                    <source srcSet={localDomain + items.image} type="image/png" alt={items.title} />
                                                                                    <img src={localDomain + items.imagewebp} type="webp" alt={items.title} />
                                                                                </picture>
                                                                            </div>
                                                                        </Col>
                                                                        <Col lg={7} md={7} sm={12}>
                                                                            <div className="content_section">
                                                                                <h4>{items.title} </h4>
                                                                                <p><i>{items.sub_title}</i></p>
                                                                                <p>{items.summary}</p>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                )
                                                            })
                                                        }
                                                    </Tab>
                                                    // <Nav.Item key={i}>
                                                    //     <Nav.Link eventKey={item.id} onClick={() => getSubCategoryInfo(item.id)}>{item.title}</Nav.Link>
                                                    // </Nav.Item>
                                                )
                                            })
                                        }

                                    </Tabs>
                                </Col>
                            </Row>

                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ServicesTab