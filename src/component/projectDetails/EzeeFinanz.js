import React from 'react'
import ProjectDetailsBanner from '../CommonComponents/ProjectDetailsBanner'
import ProjectDetailsBrief from '../CommonComponents/ProjectDetailsBrief'
import ProjectDetailsStaticStick from '../CommonComponents/ProjectDetailsStaticStick'
import ProjectDetailsServicesOffer from '../CommonComponents/ProjectDetailsServicesOffer'
import ProjectDetailsBuildPerfomance from '../CommonComponents/ProjectDetailsBuildPerfomance'
import ProjectDetailsCustomerChallenge from '../CommonComponents/ProjectDetailsCustomerChallenge'
import ProjectDetailsFunctionalFeaturesMobile from '../CommonComponents/ProjectDetailsFunctionalFeaturesMobile'
import ProjectDetailsTechnicalFeatures from '../CommonComponents/ProjectDetailsTechnicalFeatures'
import TestimonialContact from '../CommonComponents/TestimonialContact'
import Newsletter from '../CommonComponents/Newsletter'
import CaseStudy from '../CommonComponents/CaseStudy'
import Breadcrumbs from '../CommonComponents/Breadcrumbs'
import {
    EZEEFINANZ_BDCMB, EZEEFINANZ_BANNER, EZEEFINANZ_BRIEF, EZEEFINANZ_STATISTICK,
    EZEEFINANZ_SERVICES_OFFER, EZEEFINANZ_BUILD_PERFOMANCE, EZEEFINANZ_CUSTOMER_CHALLENGE,
    EZEEFINANZ_MOBILE_FEATURES, EZEEFINANZ_TECH_FEATURES, EZEEFINANZ_TECHNOLOGY_STACK, EZEEFINANZ_TC,
    EZEEFINANZ_CASE_STUDY
} from '../../actions/types'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'
const EzeeFinanz = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={EZEEFINANZ_BDCMB} />
            <ProjectDetailsBanner bannerId={EZEEFINANZ_BANNER} />
            <ProjectDetailsBrief briefId={EZEEFINANZ_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={EZEEFINANZ_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={EZEEFINANZ_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={EZEEFINANZ_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={EZEEFINANZ_CUSTOMER_CHALLENGE} />
            <ProjectDetailsFunctionalFeaturesMobile functionalFeaturesMobileId={EZEEFINANZ_MOBILE_FEATURES} />
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={EZEEFINANZ_TECH_FEATURES} />
            <TechnologyStack stackID={EZEEFINANZ_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={EZEEFINANZ_TC} />
            <CaseStudy saseStudyId={EZEEFINANZ_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default EzeeFinanz