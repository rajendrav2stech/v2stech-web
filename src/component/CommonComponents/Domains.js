import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import { domainApi } from './functions/domainApi';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';
import DomainsIconImage from './DomainsIconImage'

export default function Domains({ pageName }) {

    const [domainInfomation, domainInfo] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                domainInfo(res)
            }
        }
        domainApi({}, pageName, setResponse)
        return () => isActive = false;
    }, [pageName])
    function handelClick(event) {
        event.preventDefault();
    }
    return (
        <div className="project__domains">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} >
                        <GlobalHeadingHardCoded strong={`Domain`} span={`expertise`} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} >
                        <div className="domains_listing">
                            <ul>
                                {
                                    domainInfomation.length > 0 && domainInfomation.map((domain, i) => {
                                        return (
                                            <li key={i}>
                                                <a href="/#" onClick={handelClick}>
                                                    {/* <StackImage className={`stack`} imgUrl={localDomain + domain.image} imgTitle={domain.title}>
                                                            {domain.title}
                                                        </StackImage> */}
                                                    <DomainsIconImage className={`stack`} imgUrl={localDomain + domain.image} imgTitle={domain.title}>
                                                        {domain.title}
                                                    </DomainsIconImage>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}