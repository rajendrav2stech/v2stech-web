import React from 'react'
import ProjectDetailsBanner from '../CommonComponents/ProjectDetailsBanner'
import ProjectDetailsBrief from '../CommonComponents/ProjectDetailsBrief'
import ProjectDetailsStaticStick from '../CommonComponents/ProjectDetailsStaticStick'
import ProjectDetailsServicesOffer from '../CommonComponents/ProjectDetailsServicesOffer'
import ProjectDetailsBuildPerfomance from '../CommonComponents/ProjectDetailsBuildPerfomance'
import ProjectDetailsCustomerChallenge from '../CommonComponents/ProjectDetailsCustomerChallenge'
import ProjectDetailsFunctionalFeaturesMobile from '../CommonComponents/ProjectDetailsFunctionalFeaturesMobile'
import ProjectDetailsTechnicalFeatures from '../CommonComponents/ProjectDetailsTechnicalFeatures'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'
import TestimonialContact from '../CommonComponents/TestimonialContact'
import Newsletter from '../CommonComponents/Newsletter'
import CaseStudy from '../CommonComponents/CaseStudy'
import Breadcrumbs from '../CommonComponents/Breadcrumbs'
import {
    CARE_BDCMB, CARE_BANNER, CARE_BRIEF, CARE_STATISTICK,
    CARE_SERVICES_OFFER, CARE_BUILD_PERFOMANCE, CARE_CUSTOMER_CHALLENGE,
    CARE_MOBILE_FEATURES, CARE_TECH_FEATURES, CARE_TECHNOLOGY_STACK, CARE_TC,
    CARE_CASE_STUDY
} from '../../actions/types'

const Care = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={CARE_BDCMB} />
            <ProjectDetailsBanner bannerId={CARE_BANNER} />
            <ProjectDetailsBrief briefId={CARE_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={CARE_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={CARE_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={CARE_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={CARE_CUSTOMER_CHALLENGE} />
            <ProjectDetailsFunctionalFeaturesMobile functionalFeaturesMobileId={CARE_MOBILE_FEATURES} />
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={CARE_TECH_FEATURES} />
            <TechnologyStack stackID={CARE_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={CARE_TC} />
            <CaseStudy saseStudyId={CARE_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default Care