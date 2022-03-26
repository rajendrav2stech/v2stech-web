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
    PCMC3_BDCMB, PCMC3_BANNER, PCMC3_BRIEF, PCMC3_STATISTICK,
    PCMC3_SERVICES_OFFER, PCMC3_BUILD_PERFOMANCE, PCMC3_CUSTOMER_CHALLENGE,
    PCMC3_MOBILE_FEATURES, PCMC3_TECH_FEATURES, PCMC3_TECHNOLOGY_STACK, PCMC3_TC,
    PCMC3_CASE_STUDY
} from '../../actions/types'

const Pcmc3 = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={PCMC3_BDCMB} />
            <ProjectDetailsBanner bannerId={PCMC3_BANNER} />
            <ProjectDetailsBrief briefId={PCMC3_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={PCMC3_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={PCMC3_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={PCMC3_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={PCMC3_CUSTOMER_CHALLENGE} />
            <ProjectDetailsFunctionalFeaturesMobile functionalFeaturesMobileId={PCMC3_MOBILE_FEATURES} />
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={PCMC3_TECH_FEATURES} />
            <TechnologyStack stackID={PCMC3_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={PCMC3_TC} />
            <CaseStudy saseStudyId={PCMC3_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default Pcmc3