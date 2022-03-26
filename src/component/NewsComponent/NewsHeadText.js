import React from 'react'
import { Col } from 'react-bootstrap'

function NewsHeadText({ headTxt }) {
    return (
        <Col>
            <div className="news_heading"><h4><span>{headTxt}</span></h4></div>
        </Col>
    )
}

export default NewsHeadText
