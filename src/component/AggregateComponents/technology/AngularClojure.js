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

function AngularClojure() {
    return (
        <>
            <MetaTag metaId="ANGULARCLOJURE-META" />
            <Breadcrumbs bdcmbId="ANGULARCLOJURE-BDCMB" />
            <TechnologySlider sliderID="ANGULARCLOJURE_SLIDER" />
            <Cta ctaId="ANGULARCLOJURE-CTA" />
            <Ratting rattingId="GLOBAL-RATTING" />
            <Statistics statistId="STATISTIC" />
            <TechnologyStack stackID="ANGULARCLOJURE-TECHNOLOGY-STACK" />
            <PortfolioFilter defaultSelected="SHOWCASE" portfolioId="ANGULARCLOJURE-PORTFOLIO" />
            <DevelopmentServices devServicesId="ANGULARCLOJURE-DEV-SERVICES" />
            <HireDeveloper hireDevId="ANGULARCLOJURE-HIREDEV" />
            <ChooseUs ChooseUsId="ANGULARCLOJURE-CHOOSEUS" />
            <HiringModel hiringID="ANGULARCLOJURE-HIRINGMODEL" />
            <Domains domainId="ANGULARCLOJURE-DOMAINS" />
            <TestimonialContact testimonialContactId="ANGULARCLOJURE-TC" />
            <Blog blogId="ANGULARCLOJURE-BLOG" />
            <Newsletter />
        </>
    )
}
export default AngularClojure