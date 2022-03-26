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
    PCMC2_BDCMB, PCMC2_BANNER, PCMC2_BRIEF, PCMC2_STATISTICK,
    PCMC2_SERVICES_OFFER, PCMC2_BUILD_PERFOMANCE, PCMC2_CUSTOMER_CHALLENGE,
    PCMC2_MOBILE_FEATURES, PCMC2_TECH_FEATURES, PCMC2_TECHNOLOGY_STACK, PCMC2_TC,
    PCMC2_CASE_STUDY
} from '../../actions/types'

const Pcmc2 = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={PCMC2_BDCMB} />
            <ProjectDetailsBanner bannerId={PCMC2_BANNER} />
            <ProjectDetailsBrief briefId={PCMC2_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={PCMC2_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={PCMC2_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={PCMC2_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={PCMC2_CUSTOMER_CHALLENGE} />
            <ProjectDetailsFunctionalFeaturesMobile functionalFeaturesMobileId={PCMC2_MOBILE_FEATURES} />
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={PCMC2_TECH_FEATURES} />
            <TechnologyStack stackID={PCMC2_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={PCMC2_TC} />
            <CaseStudy saseStudyId={PCMC2_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default Pcmc2