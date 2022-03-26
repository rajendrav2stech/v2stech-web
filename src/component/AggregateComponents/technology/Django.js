import React from 'react'
import TechnologySlider from '../../CommonComponents/TechnologySlider'
import Cta from '../../CommonComponents/Cta'
import Breadcrumbs from '../../CommonComponents/Breadcrumbs'
import Ratting from '../../CommonComponents/Ratting'
import Statistics from '../../CommonComponents/Statistics'
import PortfolioFilter from '../../CommonComponents/PortfolioFilter'
import DevelopmentServices from '../../CommonComponents/DevelopmentServices'
import HireDeveloper from '../../CommonComponents/HireDeveloper'
import ChooseUs from '../../CommonComponents/ChooseUs'
import HiringModel from '../../CommonComponents/HiringModel'
import Domains from '../../CommonComponents/Domains'
import Demo from '../../CommonComponents/Demo'
import TestimonialContact from '../../CommonComponents/TestimonialContact'
import Blog from '../../CommonComponents/Blog'
import Newsletter from '../../CommonComponents/Newsletter'
import MetaTag from '../../CommonComponents/MetaTag'
import TechnologyStack from '../../CommonComponents/TechnologyStackComponent/TechnologyStack'

function Django() {
    return (
        <>           
            <MetaTag metaId="DJANGO-META" />
            <Breadcrumbs bdcmbId="DJANGO-BDCMB" />
            <TechnologySlider sliderID="DJANGO_SLIDER" />
            <Cta ctaId="DJANGO-CTA" />
            <Ratting rattingId="GLOBAL-RATTING" />
            <Statistics statistId="STATISTIC" />
            <TechnologyStack stackID="DJANGO-TECHNOLOGY-STACK" />
            <PortfolioFilter defaultSelected="SHOWCASE" portfolioId="DJANGO-PORTFOLIO" />
            <DevelopmentServices devServicesId="DJANGO-DEV-SERVICES" />
            <HireDeveloper hireDevId="DJANGO-HIREDEV" />
            <ChooseUs ChooseUsId="DJANGO-CHOOSEUS" />
            <HiringModel hiringID="DJANGO-HIRINGMODEL" />
            <Domains domainId="DJANGO-DOMAINS" />
            <Demo demoId="DJANGO-DEMO" />
            <TestimonialContact testimonialContactId="DJANGO-TC" />
            <Blog blogId="DJANGO-BLOG" />
            <Newsletter />
        </>
    )
}
export default Django