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
import CaseStudy from '../CommonComponents/CaseStudy'
import Newsletter from '../CommonComponents/Newsletter'
import Breadcrumbs from '../CommonComponents/Breadcrumbs'
import {
    FISSARA_BDCMB, FISSARA_BANNER, FISSARA_BRIEF, FISSARA_STATISTICK,
    FISSARA_SERVICES_OFFER, FISSARA_BUILD_PERFOMANCE, FISSARA_CUSTOMER_CHALLENGE,
    FISSARA_MOBILE_FEATURES, FISSARA_TECH_FEATURES, FISSARA_TECHNOLOGY_STACK, FISSARA_TC,
    FISSARA_CASE_STUDY
} from '../../actions/types'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'

const Fissara = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={FISSARA_BDCMB} />
            <ProjectDetailsBanner bannerId={FISSARA_BANNER} />
            <ProjectDetailsBrief briefId={FISSARA_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={FISSARA_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={FISSARA_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={FISSARA_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={FISSARA_CUSTOMER_CHALLENGE} />
            <ProjectDetailsFunctionalFeaturesMobile functionalFeaturesMobileId={FISSARA_MOBILE_FEATURES} />
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={FISSARA_TECH_FEATURES} />
            <TechnologyStack stackID={FISSARA_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={FISSARA_TC} />
            <CaseStudy saseStudyId={FISSARA_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default Fissara