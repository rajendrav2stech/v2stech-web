import React, { Fragment } from 'react'
import TechnologySlider from '../../CommonComponents/TechnologySlider'
import Cta from '../../CommonComponents/Cta'
import Breadcrumbs from '../../CommonComponents/Breadcrumbs'
import PortfolioFilter from '../../CommonComponents/PortfolioFilter'
import ChooseUs from '../../CommonComponents/ChooseUs'
import HiringModel from '../../CommonComponents/HiringModel'
import Domains from '../../CommonComponents/Domains'
import Demo from '../../CommonComponents/Demo'
import TestimonialContact from '../../CommonComponents/TestimonialContact'
import Blog from '../../CommonComponents/Blog'
import Newsletter from '../../CommonComponents/Newsletter'
import MetaTag from '../../CommonComponents/MetaTag'
import TechnologyStack from '../../CommonComponents/TechnologyStackComponent/TechnologyStack'
import WeAreCommitted from '../../CommonComponents/WeAreCommitted'
import { getPathName } from '../../UtilityComponents/getPathName'
import ServicesTab from '../../CommonComponents/ServicesTab'
import Ratting from '../../CommonComponents/Ratting'


export const services = () => {
    const pageName = getPathName(true)
    return (
        <Fragment>
            <MetaTag pageName={pageName} />
            <Breadcrumbs pageName={pageName} />
            <TechnologySlider pageName={pageName} />
            <Ratting pageName={pageName} />
            <Cta pageName={pageName} />
            <ServicesTab pageName={pageName} />
            <TechnologyStack pageName={pageName} />
            {/* <DevelopmentServices pageName={pageName} /> */}
            {/* <HireDeveloper pageName={pageName} /> */}
            <ChooseUs pageName={pageName} />
            <WeAreCommitted pageName={pageName} />
            <HiringModel pageName={pageName} />
            <Domains pageName={pageName} />
            <PortfolioFilter pageName={pageName} />
            <Demo pageName={pageName} />
            <TestimonialContact pageName={pageName} />
            <Blog pageName={pageName} />
            <Newsletter pageName={pageName} />
        </Fragment>
    )
}
