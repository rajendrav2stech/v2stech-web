import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { make_book } from '../../assets/images/Index';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import { whyChooseUsApi } from './functions/whyChooseUsApi';
import NewLineText from './NewLineText';

function ChooseUs({ pageName }) {
    const [choosUsInformation, choosUsInfo] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                choosUsInfo(res)
            }
        }
        whyChooseUsApi({}, pageName, setResponse)
        return () => isActive = false;
    }, [pageName])
    return (
        <div className="why__choose__us_new">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="heading_h2">
                            <h2><strong>Why</strong> <span>Choose us</span></h2>
                        </div>
                    </Col>
                    {
                        choosUsInformation.length > 0 && choosUsInformation.map((chooseData, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <Col lg={6} md={6} sm={12} xs={12} className="left">
                                        <div className="video_play">
                                            <img src={make_book} alt="" className="make_book" />
                                            <iframe title={chooseData.title} width="560" height="315" src={chooseData.video_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="right">
                                        <div className="content">
                                            <NewLineText text={chooseData.summary} />
                                            <ul className="d-flex justify-content-around text-center">
                                                {
                                                    chooseData.why_choose_us_image && chooseData.why_choose_us_image.map((items, item) => {
                                                        return (
                                                            <li key={item}>
                                                                <img src={localDomain + items.image_icon} alt={items.title} />
                                                                <span>{items.title}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </Col>
                                </React.Fragment>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
export default ChooseUs