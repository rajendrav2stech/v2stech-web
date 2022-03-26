import React from 'react'
import { Col, Row } from 'react-bootstrap'
import NewLineText from '../CommonComponents/NewLineText'
import ReadMoreButton from '../CommonComponents/ReadMoreButton'
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl'

function TopNew({ topNews }) {

    return (
        <div className="top_news_section">
            <Row>
                <Col lg={6} md={6} sm={12} className='d-flex flex-column details_of_news'>
                    <div className="news_details_desc">
                        <h2>{topNews.title}</h2></div>
                    <div className="content_para">
                        <NewLineText text={topNews.summary} />
                    </div>
                    <div>
                        <ReadMoreButton redirectUrl={topNews.read_more_url} />
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div><img src={localDomain + topNews.image} alt={topNews.title} /></div>
                </Col>
            </Row>
        </div>
    )
}

export default TopNew
