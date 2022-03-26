import React from 'react'
import { Link } from 'react-router-dom'

function MenuHeading({ url, name, setHideSubMenu }) {
    function handleClick(e) {
        setHideSubMenu(false)
        // window.location.reload(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <Link onClick={handleClick} to={url || '/'} onMouseEnter={() => { setHideSubMenu(true) }}>{name}</Link>
    )
}
export default MenuHeading