import React from 'react'

const HeroAnimationCardImage = ({ url, imgTitle, className }) => {
    return (
        <img src={url} alt={imgTitle} className={className} />
    )
}
export default HeroAnimationCardImage