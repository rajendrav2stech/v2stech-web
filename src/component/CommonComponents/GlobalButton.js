import React from 'react'
// import { Link } from 'react-router-dom';

const GlobalButton = ({ url, content }) => {
    return (
        <a target="_blank" href={url || '/'}>{content}</a>
    )
}
export default GlobalButton;