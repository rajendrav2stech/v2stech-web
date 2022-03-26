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
            <MetaTag metaId="IONIC-META" />
            <Breadcrumbs bdcmbId="IONIC-BDCMB" />
            <TechnologySlider sliderID="IONIC_SLIDER" />
            <Cta ctaId="IONIC-CTA" />
            <Ratting rattingId="GLOBAL-RATTING" />
            <Statistics statistId="STATISTIC" />
            <TechnologyStack stackID="IONIC-TECHNOLOGY-STACK" />
            <PortfolioFilter portfolioId="IONIC-PORTFOLIO" />
            <DevelopmentServices devServicesId="IONIC-DEV-SERVICES" />
            <HireDeveloper hireDevId="IONIC-HIREDEV" />
            <ChooseUs ChooseUsId="IONIC-CHOOSEUS" />
            <HiringModel hiringID="IONIC-HIRINGMODEL" />
            <Domains domainId="IONIC-DOMAINS" />
            <TestimonialContact testimonialContactId="IONIC-TC" />
            <Blog blogId="IONIC-BLOG" />
            <Newsletter />
        </>
    )
}
export default Ionic