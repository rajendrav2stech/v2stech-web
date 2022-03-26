import React from 'react'

function LeftTopHeaderList({ href, imgSrc, content }) {
    return (
        <li>
            <a href={href}><img src={imgSrc} alt="usaFlag" /> <span>{content}</span></a>
        </li>
    )
}

export default LeftTopHeaderList
