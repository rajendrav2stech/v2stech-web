import React from 'react'
// import Image from 'react-image-webp'
// import { isWebpSupported } from 'react-image-webp/dist/utils';
// import { PYTHONST, PYTHONSTWEBP } from '../../assets/images/Index';


const FunctionalModulesStackImage = ({ className, imgUrl, webpimage, imgTitle, children }) => {
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
            {/* <picture>
                <source srcSet={imgUrl} type="image/png" alt={imgTitle} />
                <img src={webpimage} type="webp" alt={imgTitle} />
            </picture> */}
            <img src={imgUrl} alt={imgTitle} />
            <span>{children}</span>
        </div>
    )
}

export default FunctionalModulesStackImage;