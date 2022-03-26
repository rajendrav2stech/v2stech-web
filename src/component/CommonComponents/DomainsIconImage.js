import React from 'react'
// import Image from 'react-image-webp'
// import { isWebpSupported } from 'react-image-webp/dist/utils';
// import { PYTHONST, PYTHONSTWEBP } from '../../assets/images/Index';


const DomainsIconImage = ({ className, imgUrl, webpimage, imgTitle, children }) => {
    // const ImgWithFallback = ({
    //     src,
    //     fallback,
    //     type = 'image/webp',
    //     ...delegated
    // }) => {
    //     return (
    //         <picture>
    //             <source srcSet={src} type={type} />
    //             <img src={fallback} {...delegated} />
    //         </picture>
    //     );
    // };
    return (
        <div className={className}>
            <img src={imgUrl} alt={imgTitle} />
            <span>{children}</span>
        </div>
    )
}

export default DomainsIconImage;