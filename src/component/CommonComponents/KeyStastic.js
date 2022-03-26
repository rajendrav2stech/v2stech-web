import React from 'react'

const KeyStastic = ({ content }) => {
    let stripedHtml = content.replace(/<[^>]+>/g, '');
    return (
        <div className="content">
            <div className="dektop_cta" dangerouslySetInnerHTML={{ __html: content }} />
            <p className="mobile_cta" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}
export default KeyStastic