import React, { Fragment } from 'react'
import AboutChooseUs from '../../CommonComponents/AboutChooseUs'
import AboutLife from '../../CommonComponents/AboutLife'
import AboutOurkeyStatistics from '../../CommonComponents/AboutOurkeyStatistics'
import AboutUSMissionVission from '../../CommonComponents/AboutUSMissionVission'
import Breadcrumbs from '../../CommonComponents/Breadcrumbs'
import MetaTag from '../../CommonComponents/MetaTag'
import Newsletter from '../../CommonComponents/Newsletter'
import TechnologySlider from '../../CommonComponents/TechnologySlider'
import TechnologyStack from '../../CommonComponents/TechnologyStackComponent/TechnologyStack'
import TestimonialContact from '../../CommonComponents/TestimonialContact'
import { getPathName } from '../../UtilityComponents/getPathName'

export const aboutUs = () => {
    const pageName = getPathName(true)
    return (
        <Fragment>
            <MetaTag metaId="PYTHON-META" pageName={pageName} />
            <Breadcrumbs pageName={pageName} />
            <TechnologySlider pageName={pageName} />

            <AboutChooseUs pageName={pageName} />
            {/* <Ratting pageName={pageName} /> */}
            {/* <AboutTechnicalPartner pageName={pageName} /> */}
            <AboutOurkeyStatistics pageName={pageName} />
            {/* <AboutMissionVission pageName={pageName} /> */}
            <AboutUSMissionVission pageName={pageName} />
            <TechnologyStack pageName={pageName} />
            {/* <AboutTimeLine pageName={pageName} /> */}
            <TestimonialContact pageName={pageName} />
            <AboutLife pageName={pageName} />
            {/* <AboutOurTeam pageName={pageName} /> */}
            <Newsletter pageName={pageName} />
        </Fragment>
    )
}
