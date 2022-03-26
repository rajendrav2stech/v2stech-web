import React from 'react'
import { Link } from 'react-router-dom'

function SubMenuList({ url, content, setHideSubMenu }) {
    function handleClick(e) {
        setHideSubMenu(false)
        // window.location.reload(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <li>
            <Link className="s" onClick={handleClick} to={url}>{content}</Link>
            {/* <a href={url}>{content}</a> */}
        </li>
    )
}
export default SubMenuList