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
    PMPL_BDCMB, PMPL_BANNER, PMPL_BRIEF, PMPL_STATISTICK,
    PMPL_SERVICES_OFFER, PMPL_BUILD_PERFOMANCE, PMPL_CUSTOMER_CHALLENGE,
    PMPL_MOBILE_FEATURES, PMPL_TECH_FEATURES, PMPL_TECHNOLOGY_STACK, PMPL_TC,
    PMPL_CASE_STUDY
} from '../../actions/types'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'

const Pmpl = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={PMPL_BDCMB} />
            <ProjectDetailsBanner bannerId={PMPL_BANNER} />
            <ProjectDetailsBrief briefId={PMPL_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={PMPL_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={PMPL_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={PMPL_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={PMPL_CUSTOMER_CHALLENGE} />
            <ProjectDetailsFunctionalFeaturesMobile functionalFeaturesMobileId={PMPL_MOBILE_FEATURES} />
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={PMPL_TECH_FEATURES} />
            <TechnologyStack stackID={PMPL_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={PMPL_TC} />
            <CaseStudy saseStudyId={PMPL_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default Pmpl