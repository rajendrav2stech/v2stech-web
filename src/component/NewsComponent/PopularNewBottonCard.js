import React, { Fragment } from 'react'
import { Col } from 'react-bootstrap'

function PopularNewBottonCard({ image, title, content, url, date_fields }) {

    let date = new Date(date_fields);
    let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

    return (
        <Fragment>
            <Col lg={2} md={2} className="left">
                <div className="thumbnill"><img src={image} alt="" /></div>
            </Col>
            <Col lg={4} md={4} className="right rel_news_section">
                <div className="date_">{dateMDY}</div>
                <div><a href={url}><h4>{title}</h4></a></div>
                {/* <div className="content_para"><NewLineText text={content} /></div>
                <div>
                    <ReadMoreButton redirectUrl={url} />
                </div> */}
            </Col>
        </Fragment>
    )
}

export default PopularNewBottonCard
