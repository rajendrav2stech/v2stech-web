import React from 'react'

const AnchorImage = ({ url, target, imgUrl, imgTitle }) => {
    return (
        <a href={url} target={target}>
            <img src={imgUrl} alt={imgTitle} />
        </a>
    )
}

export default AnchorImage