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
    PCMC4_BDCMB, PCMC4_BANNER, PCMC4_BRIEF, PCMC4_STATISTICK,
    PCMC4_SERVICES_OFFER, PCMC4_BUILD_PERFOMANCE, PCMC4_CUSTOMER_CHALLENGE,
    PCMC4_MOBILE_FEATURES, PCMC4_TECH_FEATURES, PCMC4_TECHNOLOGY_STACK, PCMC4_TC,
    PCMC4_CASE_STUDY
} from '../../actions/types'

const Pcmc3 = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={PCMC4_BDCMB} />
            <ProjectDetailsBanner bannerId={PCMC4_BANNER} />
            <ProjectDetailsBrief briefId={PCMC4_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={PCMC4_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={PCMC4_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={PCMC4_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={PCMC4_CUSTOMER_CHALLENGE} />
            <ProjectDetailsFunctionalFeaturesMobile functionalFeaturesMobileId={PCMC4_MOBILE_FEATURES} />
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={PCMC4_TECH_FEATURES} />
            <TechnologyStack stackID={PCMC4_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={PCMC4_TC} />
            <CaseStudy saseStudyId={PCMC4_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default Pcmc3