import React, { useState, useEffect } from 'react'
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl'
import AnchorImage from './AnchorImage'
import { trustedByApi } from './functions/trustedByApi'
// import GlobalButton from './GlobalButton'

const RattingDetailsOnlyViewClinet = ({ pageName }) => {
    const [trustedByInformation, settrustedByInformation] = useState([])

    useEffect(() => {
        let isActive = true;

        const setResponse = (res) => {
            if (isActive && res) {
                settrustedByInformation(res)
            }
        }
        trustedByApi({}, pageName, setResponse)

        return () => isActive = false;
    }, [pageName])
    return (
        <ul className="rt_list d-flex align-items-center">
            <li>
                <h4>Trusted by</h4>
            </li>
            {
                trustedByInformation.length > 0 && trustedByInformation.map((items, i) => {
                    return (
                        <li key={i}>
                            <AnchorImage
                                url={items.redirect_url}
                                target={`_blank`}
                                imgUrl={localDomain + items.image}
                                imgTitle={items.title}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default RattingDetailsOnlyViewClinet