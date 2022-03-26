import React from 'react'
import Breadcrumbs from '../CommonComponents/Breadcrumbs'
import ProjectDetailsBanner from '../CommonComponents/ProjectDetailsBanner'
import ProjectDetailsBrief from '../CommonComponents/ProjectDetailsBrief'
import ProjectDetailsStaticStick from '../CommonComponents/ProjectDetailsStaticStick'
import ProjectDetailsServicesOffer from '../CommonComponents/ProjectDetailsServicesOffer'
import ProjectDetailsBuildPerfomance from '../CommonComponents/ProjectDetailsBuildPerfomance'
import ProjectDetailsCustomerChallenge from '../CommonComponents/ProjectDetailsCustomerChallenge'
import ProjectDetailsFunctionalFeaturesDesktop from '../CommonComponents/ProjectDetailsFunctionalFeaturesDesktop'
import ProjectDetailsFunctionalFeaturesMobile from '../CommonComponents/ProjectDetailsFunctionalFeaturesMobile'
import ProjectDetailsTechnicalFeatures from '../CommonComponents/ProjectDetailsTechnicalFeatures'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'
import TestimonialContact from '../CommonComponents/TestimonialContact'
import Newsletter from '../CommonComponents/Newsletter'
import CaseStudy from '../CommonComponents/CaseStudy'
import {
    E3_BDCMB, E3_BANNER, E3_BRIEF, E3_STATISTICK,
    E3_SERVICES_OFFER, E3_BUILD_PERFOMANCE, E3_CUSTOMER_CHALLENGE,
    E3_MOBILE_FEATURES, E3_TECH_FEATURES, E3_TECHNOLOGY_STACK, E3_TC,
    E3_CASE_STUDY
} from '../../actions/types'
const E3 = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={E3_BDCMB} />
            <ProjectDetailsBanner bannerId={E3_BANNER} />
            <ProjectDetailsBrief briefId={E3_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={E3_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={E3_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={E3_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={E3_CUSTOMER_CHALLENGE} />
            <ProjectDetailsFunctionalFeaturesMobile functionalFeaturesMobileId={E3_MOBILE_FEATURES} />
            <ProjectDetailsFunctionalFeaturesDesktop functionalFeaturesDesktopId="E3-DESKTOP-FEATURES" />
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={E3_TECH_FEATURES} />
            <TechnologyStack stackID={E3_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={E3_TC} />
            <CaseStudy saseStudyId={E3_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default E3