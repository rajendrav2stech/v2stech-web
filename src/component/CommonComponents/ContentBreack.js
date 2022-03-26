import React from 'react'
// import { Col } from 'react-bootstrap'

const ContentBreack = ({ content }) => {
    let stripedHtml = content.replace(/<[^>]+>/g, '');
    return <p dangerouslySetInnerHTML={{ __html: content }} />

}
export default ContentBreack