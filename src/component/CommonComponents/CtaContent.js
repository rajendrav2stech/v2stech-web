import React from 'react'
import { Col } from 'react-bootstrap'

const CtaContent = ({ content }) => {
    let stripedHtml = content.replace(/<[^>]+>/g, '');
    return (
        <Col md={6}>
            <div className="content">
                <div className="dektop_cta" dangerouslySetInnerHTML={{ __html: content }} />
                <p className="mobile_cta" dangerouslySetInnerHTML={{ __html: stripedHtml }} />
            </div>
        </Col >
    )
}
export default CtaContent