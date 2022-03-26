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

function Mern() {
    return (
        <>
            <Breadcrumbs bdcmbId="MERN-BDCMB" />
            <TechnologySlider sliderID="MERN_SLIDER" />
            <Cta ctaId="MERN-CTA" />
            <Ratting rattingId="GLOBAL-RATTING" />
            <Statistics statistId="STATISTIC" />
            <TechnologyStack stackID="MERN-TECHNOLOGY-STACK" />
            <PortfolioFilter portfolioId="MERN-PORTFOLIO" />
            <DevelopmentServices devServicesId="JAVA-DEV-SERVICES" />
            <HireDeveloper hireDevId="MERN-HIREDEV" />
            <ChooseUs ChooseUsId="MERN-CHOOSEUS" />
            <HiringModel hiringID="MERN-HIRINGMODEL" />
            <Domains domainId="MERN-DOMAINS" />
            <TestimonialContact testimonialContactId="MERN-TC" />
            <Blog blogId="MERN-BLOG" />
            <Newsletter />
        </>
    )
}
export default Mern