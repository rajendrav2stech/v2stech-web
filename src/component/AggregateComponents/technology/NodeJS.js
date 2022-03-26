import React from 'react'
import MetaTag from '../../CommonComponents/MetaTag'
import TechnologySlider from '../../CommonComponents/TechnologySlider'
import Breadcrumbs from '../../CommonComponents/Breadcrumbs'
import Cta from '../../CommonComponents/Cta'
import Ratting from '../../CommonComponents/Ratting'
import Statistics from '../../CommonComponents/Statistics'
import PortfolioFilter from '../../CommonComponents/PortfolioFilter'
import DevelopmentServices from '../../CommonComponents/DevelopmentServices'
import HireDeveloper from '../../CommonComponents/HireDeveloper'
import ChooseUs from '../../CommonComponents/ChooseUs'
import HiringModel from '../../CommonComponents/HiringModel'
import Domains from '../../CommonComponents/Domains'
import TestimonialContact from '../../CommonComponents/TestimonialContact'
import Blog from '../../CommonComponents/Blog'
import Newsletter from '../../CommonComponents/Newsletter'
import TechnologyStack from '../../CommonComponents/TechnologyStackComponent/TechnologyStack'

function NodeJS() {
    return (
        <>
            <MetaTag metaId="NODEJS-META" />
            <Breadcrumbs bdcmbId="NODEJS-BDCMB" />
            <TechnologySlider sliderID="NODEJS_SLIDER" />
            <Cta ctaId="NODEJS-CTA" />
            <Ratting rattingId="GLOBAL-RATTING" />
            <Statistics statistId="STATISTIC" />
            <TechnologyStack stackID="NODEJS-TECHNOLOGY-STACK" />
            <PortfolioFilter defaultSelected="SHOWCASE" portfolioId="REACTPAGE-PORTFOLIO" />
            <DevelopmentServices devServicesId="NODEJS-DEV-SERVICES" />
            <HireDeveloper hireDevId="NODEJS-HIREDEV" />
            <ChooseUs ChooseUsId="NODEJS-CHOOSEUS" />
            <HiringModel hiringID="NODEJS-HIRINGMODEL" />
            <Domains domainId="NODEJS-DOMAINS" />
            <TestimonialContact testimonialContactId="NODEJS-TC" />
            <Blog blogId="NODEJS-BLOG" />
            <Newsletter />
        </>
    )
}
export default NodeJS