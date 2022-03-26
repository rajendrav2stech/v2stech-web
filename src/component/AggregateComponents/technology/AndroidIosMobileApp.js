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
import { ANDROIDIOSMOBILEAPP_BDCMB, ANDROIDIOSMOBILEAPP_CTA, ANDROIDIOSMOBILEAPP_META, ANDROIDIOSMOBILEAPP_SLIDER } from '../../../actions/types'
import TechnologyStack from '../../CommonComponents/TechnologyStackComponent/TechnologyStack'

function Ionic() {
    return (
        <>
            <MetaTag metaId={ANDROIDIOSMOBILEAPP_META} />
            <Breadcrumbs bdcmbId={ANDROIDIOSMOBILEAPP_BDCMB} />
            <TechnologySlider sliderID={ANDROIDIOSMOBILEAPP_SLIDER} />
            <Cta ctaId={ANDROIDIOSMOBILEAPP_CTA} />
            <Ratting rattingId="GLOBAL-RATTING" />
            <Statistics statistId="STATISTIC" />
            <TechnologyStack stackID="ANDROIDIOSMOBILEAPP-TECHNOLOGY-STACK" />
            <PortfolioFilter portfolioId="ANDROIDIOSMOBILEAPP-PORTFOLIO" />
            <DevelopmentServices devServicesId="ANDROIDIOSMOBILEAPP-DEV-SERVICES" />
            <HireDeveloper hireDevId="ANDROIDIOSMOBILEAPP-HIREDEV" />
            <ChooseUs ChooseUsId="ANDROIDIOSMOBILEAPP-CHOOSEUS" />
            <HiringModel hiringID="ANDROIDIOSMOBILEAPP-HIRINGMODEL" />
            <Domains domainId="ANDROIDIOSMOBILEAPP-DOMAINS" />
            <TestimonialContact testimonialContactId="ANDROIDIOSMOBILEAPP-TC" />
            <Blog blogId="ANDROIDIOSMOBILEAPP-BLOG" />
            <Newsletter />
        </>
    )
}
export default Ionic