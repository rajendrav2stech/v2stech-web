import React, { Fragment } from 'react'
import TechnologySlider from '../../CommonComponents/TechnologySlider'
import Breadcrumbs from '../../CommonComponents/Breadcrumbs'
import MetaTag from '../../CommonComponents/MetaTag'
import { getPathName } from '../../UtilityComponents/getPathName'
import InnovationProject from '../../CommonComponents/InnovationProject'


export const innovation = () => {
    const pageName = getPathName(true)
    return (
        <Fragment>
            <MetaTag metaId="PYTHON-META" pageName={pageName} />
            <Breadcrumbs pageName={pageName} />
            <TechnologySlider pageName={pageName} />
            <InnovationProject />
        </Fragment>
    )
}
