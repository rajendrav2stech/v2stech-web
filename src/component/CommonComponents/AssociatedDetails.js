import React, { useState, useEffect } from 'react'
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl'
import AnchorImage from './AnchorImage'
import { associatedApi } from './functions/associatedApi'

const AssociatedDetails = () => {
    const [asssocitedInformation, setasssocitedInformation] = useState([])

    useEffect(() => {
        let isActive = true;

        const setResponse = (res) => {
            if (isActive && res) {
                setasssocitedInformation(res)
            }
        }
        associatedApi({}, setResponse)

        return () => isActive = false;
    }, [])
    return (
        <ul className="rt_list d-flex align-items-center">
            <li>
                <h4>Associated with</h4>
            </li>
            {
                asssocitedInformation.length > 0 && asssocitedInformation.map((items, i) => {
                    return (
                        <li key={i} className="text-center">
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

export default AssociatedDetails