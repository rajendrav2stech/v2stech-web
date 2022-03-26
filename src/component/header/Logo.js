import React from 'react'
// import { Link } from 'react-router-dom'
import { LOGO } from "../../assets/images/Index"
function Logo() {
    return (
        <div className="logo">
            <a href="/">
                <img src={LOGO} alt="logo" />
            </a>
        </div>
    )
}
export default Logo