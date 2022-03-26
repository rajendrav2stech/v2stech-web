import React from 'react'
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

function Java() {
    return (
        <>
            <Breadcrumbs bdcmbId="JAVA-BDCMB" />
            <TechnologySlider sliderID="JAVA_SLIDER" />
            <Cta ctaId="JAVA-CTA" />
            <Ratting rattingId="GLOBAL-RATTING" />
            <Statistics statistId="STATISTIC" />
            <TechnologyStack stackID="JAVA-TECHNOLOGY-STACK" />
            <PortfolioFilter defaultSelected="SHOWCASE" portfolioId="JAVA-PORTFOLIO" />
            <DevelopmentServices devServicesId="JAVA-DEV-SERVICES" />
            <HireDeveloper hireDevId="JAVA-HIREDEV" />
            <ChooseUs ChooseUsId="JAVA-CHOOSEUS" />
            <HiringModel hiringID="JAVA-HIRINGMODEL" />
            <Domains domainId="JAVA-DOMAINS" />
            <TestimonialContact testimonialContactId="JAVA-TC" />
            <Blog blogId="JAVA-BLOG" />
            <Newsletter />
        </>
    )
}
export default Java