import React from 'react'
// import { Link } from 'react-router-dom'

function MobileSubMenuList({ url, content }) {
    return (
        <ul>
            <li>
                <a href={url}>{content}</a>
            </li>
        </ul>
    )
}
export default MobileSubMenuList