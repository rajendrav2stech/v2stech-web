import React from 'react'
import { Link } from 'react-router-dom'

function SubListFooter({ href, content }) {
    function handleClick(e) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <Link onClick={handleClick} to={href}> {content}</Link>
    )
}
export default SubListFooter