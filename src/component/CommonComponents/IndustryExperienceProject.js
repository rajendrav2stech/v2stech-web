import React, { Fragment, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
// import { ANDROID, BOOTSTRAP, EDUCATION_BANNER, FLASK, GUNICORN, HTML, JQUERY, WTCIMG1 } from '../../assets/images/Index'
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl'
import useApi from '../hooks/useApi'
import { indExpViewOurWorkApi } from './functions/indExpViewOurWorkApi'
import GlobalHeadingHardCoded from './GlobalHeadingHardCoded'
import ContentBreack from './ContentBreack'
import PopUP from './PopUp';
import Loader from './Loader'

export default function IndustryExperienceProject({ pageName }) {
    const [indExpViewOurWorkiformation] = useApi(indExpViewOurWorkApi, pageName)
    const [isOpen, setIsOpen] = React.useState(false);
    const [videoUrlLink, setVideoUrlLink] = useState("")
    const [loading, setLoading] = useState(true)

    const showModal = (videoUrl) => {
        setLoading(true)
        setIsOpen(true);
        setVideoUrlLink(videoUrl)
    };
    const hideModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="industry_experience_project">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <GlobalHeadingHardCoded strong={`View Our`} span={`Work`} />
                    </Col>
                    {
                        indExpViewOurWorkiformation.length > 0 && indExpViewOurWorkiformation.map((item, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <Col lg={4} md={4} sm={12}>
                                        <div className="project_thumnill">
                                            <img src={localDomain + item.project_thumbnail} alt={item.title} />
                                        </div>
                                    </Col>
                                    <Col lg={8} md={8} sm={12}>
                                        <div className="project_content">
                                            <h2>{item.title}</h2>
                                            <h3>{item.sub_title}</h3>
                                            <ContentBreack content={item.summary} />
                                            <ul className="project_size d-flex">
                                                <li><strong>Project Size:</strong > {item.project_size}</li>
                                                <li><strong>Duration:</strong > {item.Duration}</li>
                                                <li><strong>Team size:</strong > {item.team_size}</li>
                                            </ul>
                                            <h6><strong>Applications: </strong > <ContentBreack content={item.project_application} /> </h6>
                                            <ul className="project_img d-flex">
                                                {
                                                    item.project_logo ? item.project_logo.map((list, l) => {
                                                        return (
                                                            <li key={l}><img src={localDomain + list.image} alt={list.title} /></li>
                                                        )
                                                    }) : null
                                                }
                                            </ul>
                                            <ul className="exploer d-flex">
                                                <li>{item.redirect_url ? <a href={item.redirect_url} className="btn" target="_blank">Explore More </a> : null} </li>
                                                <li>{item.video_url ? <Button type="button" className="watch_dmeo" data-toggle="modal" data-target="#exampleModal1"
                                                    onClick={() => { showModal(item.video_url) }}
                                                >Watch Demo</Button> : null}</li>
                                                {isOpen && <PopUP
                                                    shouldModalOpen={isOpen}
                                                    closeModal={hideModal}
                                                    title={''}>
                                                    <Fragment>
                                                        {loading && <Loader />}
                                                        <iframe
                                                            onLoad={() => { setLoading(false) }}
                                                            src={videoUrlLink}
                                                            title={item.title}
                                                            width="100%"
                                                            height="360"
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen />
                                                    </Fragment>
                                                </PopUP>}
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
