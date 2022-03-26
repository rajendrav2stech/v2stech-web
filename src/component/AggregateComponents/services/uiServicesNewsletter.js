import React, { Fragment } from 'react'
import TechnologySlider from '../../CommonComponents/TechnologySlider'
import Cta from '../../CommonComponents/Cta'
import Breadcrumbs from '../../CommonComponents/Breadcrumbs'
import PortfolioFilter from '../../CommonComponents/PortfolioFilter'
import TestimonialContact from '../../CommonComponents/TestimonialContact'
import Newsletter from '../../CommonComponents/Newsletter'
import MetaTag from '../../CommonComponents/MetaTag'
import { getPathName } from '../../UtilityComponents/getPathName'


export const uiServicesNewsletter = () => {
    const pageName = getPathName(true)
    return (
        <Fragment>
            <MetaTag pageName={pageName} />
            <Breadcrumbs pageName={pageName} />
            <TechnologySlider pageName={pageName} />
            <Cta pageName={pageName} />
            <PortfolioFilter pageName={pageName} />
            <TestimonialContact pageName={pageName} />
            <Newsletter pageName={pageName} />
        </Fragment>
    )
}
