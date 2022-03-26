import React, { Fragment } from 'react'
import TechnologySlider from '../../CommonComponents/TechnologySlider'
import Cta from '../../CommonComponents/Cta'
import Breadcrumbs from '../../CommonComponents/Breadcrumbs'
import Ratting from '../../CommonComponents/Ratting'
import TestimonialContact from '../../CommonComponents/TestimonialContact'
import Blog from '../../CommonComponents/Blog'
import Newsletter from '../../CommonComponents/Newsletter'
import MetaTag from '../../CommonComponents/MetaTag'
import TechnologyStack from '../../CommonComponents/TechnologyStackComponent/TechnologyStack'
import { getPathName } from '../../UtilityComponents/getPathName'
import FunctionalModal from '../../CommonComponents/FunctionalModal'
import IndustryExperienceProject from '../../CommonComponents/IndustryExperienceProject'

export const industryExperience = () => {
    const pageName = getPathName(true)
    return (
        <Fragment>
            <MetaTag pageName={pageName} />
            <Breadcrumbs pageName={pageName} />
            <TechnologySlider pageName={pageName} />
            <Cta pageName={pageName} />
            <Ratting pageName={pageName} />
            <FunctionalModal pageName={pageName} />
            <IndustryExperienceProject pageName={pageName} />
            <TechnologyStack pageName={pageName} />
            <TestimonialContact pageName={pageName} />
            <Blog pageName={pageName} />
            <Newsletter pageName={pageName} />
        </Fragment>
    )
}
