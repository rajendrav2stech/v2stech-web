import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl'
import useApi from '../hooks/useApi'
import ContentBreack from './ContentBreack'
import { innovationApi } from './functions/innovationApi'
import PopUP from './PopUp'

export default function InnovationProject() {
    const [innovationApiData] = useApi(innovationApi)
    const [isOpen, setIsOpen] = React.useState(false);
    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="innovation_project">
            <Container>
                <Row>
                    {
                        innovationApiData.length > 0 && innovationApiData.map((items, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <Col lg={12} md={12} sm={12}>
                                        <h2>{items.title}</h2>
                                    </Col>
                                    {
                                        items.innovation_title ? items.innovation_title.map((jobs, j) => {
                                            return (
                                                <React.Fragment key={j}>
                                                    <Col lg={4} md={4} sm={12}>
                                                        <div className="thumbnill">
                                                            <img src={localDomain + jobs.image} alt={jobs.title} />
                                                        </div>
                                                    </Col>
                                                    <Col lg={8} md={8} sm={12}>
                                                        <div className="content">
                                                            <h3>{jobs.title}</h3>
                                                            <h4>{jobs.sub_title}</h4>
                                                            <ContentBreack content={jobs.summary} />
                                                            <div className="feature">
                                                                <div className="left">
                                                                    <h5>Features</h5>
                                                                    <ul className="feature_list">
                                                                        {
                                                                            jobs.feature ? jobs.feature.map((feature, f) => {
                                                                                return (
                                                                                    <li key={f}>
                                                                                        <span><img src={localDomain + feature.image} alt={feature.title} /></span>
                                                                                        <strong>{feature.title}</strong>
                                                                                    </li>
                                                                                )
                                                                            }) : null
                                                                        }
                                                                    </ul>
                                                                </div>
                                                                <div className="right">
                                                                    <h5>Uses</h5>
                                                                    <ul className="feature_user">
                                                                        {
                                                                            jobs.uses ? jobs.uses.map((uses, u) => {
                                                                                return (
                                                                                    <li key={u}>
                                                                                        {uses.title}
                                                                                    </li>
                                                                                )
                                                                            }) : null
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="feature_button">
                                                                <ul className="d-flex">
                                                                    <li className="btn-default">
                                                                        <a href={jobs.read_more_url}>Read More</a>
                                                                    </li>
                                                                    {
                                                                        jobs.watch_demo ? <li><Button type="button" className="watch_dmeo" data-toggle="modal" data-target="#exampleModal1" onClick={showModal}>Watch Demo</Button></li> : null
                                                                    }
                                                                    <PopUP
                                                                        shouldModalOpen={isOpen}
                                                                        closeModal={hideModal}
                                                                        title={''}>
                                                                        <iframe title={jobs.title} width="100%" height="360" src={jobs.watch_demo} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                                                    </PopUP>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                </React.Fragment>
                                            )
                                        }) : null
                                    }



                                </React.Fragment>
                            )
                        })
                    }

                </Row>
            </Container>
        </div>
    )
}
