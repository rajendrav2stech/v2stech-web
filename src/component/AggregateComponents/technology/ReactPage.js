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

function ReactPage() {
    return (
        <>
            <MetaTag metaId="REACTPAGE-META" />
            <Breadcrumbs bdcmbId="REACTPAGE-BDCMB" />
            <TechnologySlider sliderID="REACTPAGE_SLIDER" />
            <Cta ctaId="REACTPAGE-CTA" />
            <Ratting rattingId="GLOBAL-RATTING" />
            <Statistics statistId="STATISTIC" />
            <TechnologyStack stackID="REACTPAGE-TECHNOLOGY-STACK" />
            <PortfolioFilter defaultSelected="SHOWCASE" portfolioId="REACTPAGE-PORTFOLIO" />
            <DevelopmentServices devServicesId="REACTPAGE-DEV-SERVICES" />
            <HireDeveloper hireDevId="REACTPAGE-HIREDEV" />
            <ChooseUs ChooseUsId="REACTPAGE-CHOOSEUS" />
            <HiringModel hiringID="REACTPAGE-HIRINGMODEL" />
            <Domains domainId="REACTPAGE-DOMAINS" />
            <TestimonialContact testimonialContactId="REACTPAGE-TC" />
            <Blog blogId="REACTPAGE-BLOG" />
            <Newsletter />
        </>
    )
}
export default ReactPage