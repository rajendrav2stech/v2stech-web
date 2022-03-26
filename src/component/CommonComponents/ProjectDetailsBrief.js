import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
import useApi from '../hooks/useApi';
import ContentBreack from './ContentBreack';
import { projectBriefApi } from './functions/projectBriefApi';
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded';

export default function ProjectDetailsBrief({ pageName }) {
    const [projectBriefInformation] = useApi(projectBriefApi, pageName)
    return (
        <div className="project_details_brief">
            <Container>
                <Row>
                    {
                        projectBriefInformation.length > 0 && projectBriefInformation.map((items, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <Col md={6} sm={12}>
                                        <div className="content text-left">
                                            <GlobalHeadingHardCoded strong={`Project`} span={items.brief_title} />
                                            <ContentBreack content={items.brief_summary} />
                                        </div>
                                        <div className="content text-left">
                                            <GlobalHeadingHardCoded strong={`Project`} span={items.execution_title} />
                                            <ContentBreack content={items.execution_summary} />
                                        </div>
                                    </Col>
                                    <Col md={5} sm={12}>

                                        <div className="thumnill">
                                            <div className="thumb__dashbord">
                                                {
                                                    items.image_url ? <img src={localDomain + items.image_url} alt={items.brief_title} className="details_banner" /> :
                                                        <iframe title={items.brief_title} width="100%" height="260" src={items.video_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                                }

                                            </div>
                                        </div>
                                    </Col>
                                </React.Fragment>
                            )
                        })
                    }
                </Row>
            </Container>
        </div >
    )
}
