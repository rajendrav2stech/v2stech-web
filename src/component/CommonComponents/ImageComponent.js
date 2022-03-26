import React from 'react'
const ImageComponent = ({ image, title, webpImage }) => {
    return (
        <picture>
            <source srcSet={image} type="image/png" alt={title} />
            <img src={webpImage} type="webp" alt={title} />
        </picture>
    )
}
export default ImageComponent