
import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap';
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { breadCrumbApi } from './functions/breadCrumbApi';
import useApi from '../hooks/useApi';

function Breadcrumbs({ pageName }) {

    const [breadCrumbInformation] = useApi(breadCrumbApi, pageName)

    return (
        <div className="breadcrumbs">
            {breadCrumbInformation.length > 0 &&
                < Container >
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <ul className="d-flex align-items-center">
                                <li><Link to={`/`}>{breadCrumbInformation[0].first_level ? <span>{breadCrumbInformation[0].first_level}</span> : null}</Link></li>
                                <li><Link to={`#`}>{breadCrumbInformation[0].second_level ? <span>{breadCrumbInformation[0].second_level}</span> : null}</Link></li>
                                <li><Link to={`#`}>{breadCrumbInformation[0].third_level ? <span>{breadCrumbInformation[0].third_level}</span> : null}</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            }
        </div>
    )
}

Breadcrumbs.protoType = {
    bdcmbId: PropTypes.string.isRequired
}

export default React.memo(Breadcrumbs);
