import React from 'react'
// import Image from 'react-image-webp'
// import { isWebpSupported } from 'react-image-webp/dist/utils';
// import { PYTHONST, PYTHONSTWEBP } from '../../assets/images/Index';


const StackImage = ({ className, imgUrl, webpimage, imgTitle, children }) => {
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
                <source srcSet={PYTHONSTWEBP} type={imgTitle} />
                <img src={PYTHONST} type={imgTitle} />
                {isWebpSupported() ?
                     <source srcSet={imgUrl} type={imgTitle} />
                    :
                    <img src={PYTHONSTWEBP} type={imgTitle} />}
            </picture>

            <ImgWithFallback
                src={PYTHONST}
                fallback={PYTHONSTWEBP}
                alt="A photo showing the expiration date on a box of Lucky Charms"
            /> */}
            <picture>
                <source srcSet={imgUrl} type="image/png" alt={imgTitle} />
                <img src={webpimage} type="webp" alt={imgTitle} />
            </picture>
            {/* <img src={imgUrl} alt={imgTitle} /> */}
            <span>{children}</span>
        </div>
    )
}

export default StackImage;