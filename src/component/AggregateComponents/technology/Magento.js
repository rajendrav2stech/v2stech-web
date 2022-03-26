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

function Ionic() {
    return (
        <>
            <MetaTag metaId="MAGENTO-META" />
            <Breadcrumbs bdcmbId="MAGENTO-BDCMB" />
            <TechnologySlider sliderID="MAGENTO_SLIDER" />
            <Cta ctaId="MAGENTO-CTA" />
            <Ratting rattingId="GLOBAL-RATTING" />
            <Statistics statistId="STATISTIC" />
            <TechnologyStack stackID="MAGENTO-TECHNOLOGY-STACK" />
            <PortfolioFilter portfolioId="MAGENTO-PORTFOLIO" />
            <DevelopmentServices devServicesId="MAGENTO-DEV-SERVICES" />
            <HireDeveloper hireDevId="MAGENTO-HIREDEV" />
            <ChooseUs ChooseUsId="MAGENTO-CHOOSEUS" />
            <HiringModel hiringID="MAGENTO-HIRINGMODEL" />
            <Domains domainId="MAGENTO-DOMAINS" />
            <TestimonialContact testimonialContactId="MAGENTO-TC" />
            <Blog blogId="MAGENTO-BLOG" />
            <Newsletter />
        </>
    )
}
export default Ionic