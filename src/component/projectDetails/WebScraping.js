import React from 'react'
import ProjectDetailsBanner from '../CommonComponents/ProjectDetailsBanner'
import ProjectDetailsBrief from '../CommonComponents/ProjectDetailsBrief'
import ProjectDetailsStaticStick from '../CommonComponents/ProjectDetailsStaticStick'
import ProjectDetailsServicesOffer from '../CommonComponents/ProjectDetailsServicesOffer'
import ProjectDetailsBuildPerfomance from '../CommonComponents/ProjectDetailsBuildPerfomance'
import ProjectDetailsCustomerChallenge from '../CommonComponents/ProjectDetailsCustomerChallenge'
import ProjectDetailsTechnicalFeatures from '../CommonComponents/ProjectDetailsTechnicalFeatures'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'
import TestimonialContact from '../CommonComponents/TestimonialContact'
import Newsletter from '../CommonComponents/Newsletter'
import CaseStudy from '../CommonComponents/CaseStudy'
import Breadcrumbs from '../CommonComponents/Breadcrumbs'
import {
    WEBSCRAPING_BDCMB, WEBSCRAPING_BANNER, WEBSCRAPING_BRIEF, WEBSCRAPING_STATISTICK,
    WEBSCRAPING_SERVICES_OFFER, WEBSCRAPING_BUILD_PERFOMANCE, WEBSCRAPING_CUSTOMER_CHALLENGE,
    WEBSCRAPING_TECH_FEATURES, WEBSCRAPING_TECHNOLOGY_STACK, WEBSCRAPING_TC,
    WEBSCRAPING_CASE_STUDY
} from '../../actions/types'

const WebScraping = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={WEBSCRAPING_BDCMB} />
            <ProjectDetailsBanner bannerId={WEBSCRAPING_BANNER} />
            <ProjectDetailsBrief briefId={WEBSCRAPING_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={WEBSCRAPING_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={WEBSCRAPING_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={WEBSCRAPING_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={WEBSCRAPING_CUSTOMER_CHALLENGE} />
           
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={WEBSCRAPING_TECH_FEATURES} />
            <TechnologyStack stackID={WEBSCRAPING_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={WEBSCRAPING_TC} />
            <CaseStudy saseStudyId={WEBSCRAPING_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default WebScraping