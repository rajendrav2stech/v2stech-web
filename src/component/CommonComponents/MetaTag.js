import React from 'react'
import MetaTags from 'react-meta-tags';
import useApi from '../hooks/useApi';
import { metaTagApi } from './functions/metaTagApi';

function MetaTag({ pageName }) {
    const [meataData] = useApi(metaTagApi, pageName)
    
    return (
        <div>
            {
                meataData.length > 0 && meataData.map((item, i) => {
                    
                    return (
                        <MetaTags key={i}>
                            <title>{item.title}</title>
                            <meta name="description" content={item.description} />
                            <meta name="keywords" content={item.keywords} />
                            <meta property="og:image" content={item.thumbnails} />
                        </MetaTags>
                    )
                })
            }
        </div>
    )
}

export default MetaTag
{/* <title>{items.title}</title>
<meta name="description" content={items.description} />
<meta name="keywords" content={items.keywords} />
<meta property="og:image" content={items.thumbnail} /> */}