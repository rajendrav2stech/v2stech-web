import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import { videoDemoApi } from './functions/videoDemoApi';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';

export default function Demo({ pageName }) {
    const [demoInFormation, setDemoInFormation] = useState([])
    const [activeKey, setActiveKey] = useState("")
    const [tabInfo, setTabInfo] = useState({})

    useEffect(() => {
        setActiveKey("")
        setDemoInFormation([])
        setTabInfo({})
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                if (res.length > 0) {
                    setDemoInFormation(res)
                    setActiveKey(res[0].view_video_id)
                    setTabInfo(res[0])
                }
            }
        }
        videoDemoApi({}, pageName, setResponse)
        return () => isActive = false;
    }, [pageName])

    const handleOnClickNavItem = (key) => {
        setActiveKey(key)
        let data = demoInFormation.filter(demo => demo.view_video_id === key)
        setTabInfo(data[0])

    }
    return (
        <div className="project__demos">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <GlobalHeadingHardCoded strong={`View`} span={`demo`} />
                    </Col>
                </Row>
                {activeKey && demoInFormation.length > 0 &&
                    <Row>
                        <Tab.Container id="left-tabs-example" defaultActiveKey={activeKey}>
                            <Col lg={8} md={8} sm={12}>
                                <Tab.Content>
                                    <Tab.Pane eventKey={tabInfo && tabInfo.view_video_id}>
                                        <iframe title={tabInfo && tabInfo.title} src={tabInfo && tabInfo.video_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <Nav variant="pills" className="flex-column">
                                    <Scrollbars>
                                        {
                                            demoInFormation.length > 0 ? demoInFormation.map((demo, i) => {
                                                return (
                                                    <Nav.Item key={i} onClick={() => handleOnClickNavItem(demo.view_video_id)}>
                                                        <Nav.Link eventKey={demo.view_video_id}>
                                                            <img src={localDomain + demo.image} alt={demo.title} />
                                                            <div className="content">
                                                                <strong>{demo.title}</strong>
                                                                <span>{demo.sub_title}</span>
                                                            </div>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                )
                                            }) : null
                                        }
                                    </Scrollbars>
                                </Nav>
                            </Col>
                        </Tab.Container>
                    </Row>}
            </Container>
        </div>
    )
}

