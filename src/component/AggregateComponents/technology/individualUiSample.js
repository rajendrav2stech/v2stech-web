import React, { Fragment } from 'react'
import Breadcrumbs from '../../CommonComponents/Breadcrumbs'
import MetaTag from '../../CommonComponents/MetaTag'
import { getPathName } from '../../UtilityComponents/getPathName'
import IndividualSampleUI from '../../CommonComponents/IndividualSampleUI'


export const individualUiSample = () => {
    const pageName = getPathName(true)
    return (
        <Fragment>
            <MetaTag pageName={pageName} />
            <Breadcrumbs pageName={pageName} />
            <IndividualSampleUI pageName={pageName} />
        </Fragment>
    )
}
