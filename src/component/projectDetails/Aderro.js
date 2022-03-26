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
    ADERRO_BDCMB, ADERRO_BANNER, ADERRO_BRIEF, ADERRO_STATISTICK,
    ADERRO_SERVICES_OFFER, ADERRO_BUILD_PERFOMANCE, ADERRO_CUSTOMER_CHALLENGE,
    ADERRO_MOBILE_FEATURES, ADERRO_TECH_FEATURES, ADERRO_TECHNOLOGY_STACK, ADERRO_TC,
    ADERRO_CASE_STUDY
} from '../../actions/types'
const Aderro = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={ADERRO_BDCMB} />
            <ProjectDetailsBanner bannerId={ADERRO_BANNER} />
            <ProjectDetailsBrief briefId={ADERRO_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={ADERRO_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={ADERRO_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={ADERRO_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={ADERRO_CUSTOMER_CHALLENGE} />
            <ProjectDetailsFunctionalFeaturesMobile functionalFeaturesMobileId={ADERRO_MOBILE_FEATURES} />
            <ProjectDetailsFunctionalFeaturesDesktop functionalFeaturesDesktopId="ADERRO-DESKTOP-FEATURES" />
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={ADERRO_TECH_FEATURES} />
            <TechnologyStack stackID={ADERRO_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={ADERRO_TC} />
            <CaseStudy saseStudyId={ADERRO_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default Aderro