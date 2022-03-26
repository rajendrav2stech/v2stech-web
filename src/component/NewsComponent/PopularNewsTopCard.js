import React from 'react'
import { Col } from 'react-bootstrap'
import NewLineText from '../CommonComponents/NewLineText'
import ReadMoreButton from '../CommonComponents/ReadMoreButton'

function PopularNewsTopCard({ image, title, content, url }) {

    return (
        <Col lg={6} md={6} sm={12} className='d-flex flex-column col_2 papular_news_section'>
            <div className="thumbnill"><img src={image} alt='' /></div>
            <div className="title_heading"><h4>{title}</h4></div>
            <div className="content content_para"><NewLineText text={content} /></div>
            <div>
                <ReadMoreButton redirectUrl={url} />
            </div>
        </Col>
    )
}

export default PopularNewsTopCard
